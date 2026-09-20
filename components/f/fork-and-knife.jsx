import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yyf8pgzgt.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/h/hws86vb1n.css';
import '../../css/z/zj7mh4bty.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="yyf8pgzgt"/><g class="x8poo_bjf"><path class="hws86vb1n"/><path class="zj7mh4bty"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:fork-and-knife"} {...others} />);
}

export default Component;
