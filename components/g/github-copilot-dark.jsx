import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j1zld5b4z.css';

const viewBox = {"width":256,"height":208};
const content = `<path class="j1zld5b4z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:github-copilot-dark"} {...others} />);
}

export default Component;
