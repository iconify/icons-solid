import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l5ijgqb1h.css';
import '../../css/t/tgz0bac_r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l5ijgqb1h"/><path class="tgz0bac_r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:invoice-light"} {...others} />);
}

export default Component;
