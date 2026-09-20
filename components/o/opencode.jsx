import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x0klx1dfy.css';
import '../../css/n/nr9_5n4qz.css';

const viewBox = {"width":16,"height":16};
const content = `<g transform="matrix(1.5 0 0 1.5 -23.858 -7.25)"><path class="x0klx1dfy"/><rect class="nr9_5n4qz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:opencode"} {...others} />);
}

export default Component;
