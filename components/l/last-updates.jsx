import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t19_d8l-n.css';
import '../../css/u/u7aldsb5b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t19_d8l-n"/><path class="u7aldsb5b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:last-updates"} {...others} />);
}

export default Component;
