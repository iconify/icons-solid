import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pt6j8yqtd.css';
import '../../css/a/a13beybmo.css';
import '../../css/f/fgizidusj.css';
import '../../css/y/yjjibyi4l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="pt6j8yqtd"/><path class="a13beybmo"/><path class="fgizidusj"/><path class="yjjibyi4l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:reorder-2-linear"} {...others} />);
}

export default Component;
