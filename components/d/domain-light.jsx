import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r4cm7rbiq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r4cm7rbiq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:domain-light"} {...others} />);
}

export default Component;
