import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u1nu-xiim.css';

const viewBox = {"width":256,"height":208};
const content = `<path class="u1nu-xiim"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:github-copilot-light"} {...others} />);
}

export default Component;
