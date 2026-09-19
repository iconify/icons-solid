import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aosvgyiyn.css';

const viewBox = {"width":1536,"height":1664};
const content = `<g transform="translate(0 1664) scale(1 -1)"><path class="aosvgyiyn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:thumbs-o-down"} {...others} />);
}

export default Component;
