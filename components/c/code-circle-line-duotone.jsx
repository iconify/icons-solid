import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yp54sytzi.css';
import '../../css/b/b_mqzbbbw.css';
import '../../css/o/o0vcg8bqt.css';
import '../../css/v/vx9mvac0z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="yp54sytzi"/><path class="b_mqzbbbw"/><path class="o0vcg8bqt"/><path class="vx9mvac0z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:code-circle-line-duotone"} {...others} />);
}

export default Component;
