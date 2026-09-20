import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dq3cau5ur.css';
import '../../css/v/vut5pp8pl.css';
import '../../css/k/kay86hbjq.css';
import '../../css/z/z8kg6hb8d.css';
import '../../css/y/yyb1ty9ke.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/i/iohwbybue.css';
import '../../css/e/eal-elbpc.css';
import '../../css/x/x3s2mfjco.css';
import '../../css/l/ljf4szb9j.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="dq3cau5ur"/><path class="vut5pp8pl"/><path class="kay86hbjq"/><circle class="z8kg6hb8d"/><path class="yyb1ty9ke"/><g class="ij2x_72vy"><path class="iohwbybue"/><path class="eal-elbpc"/><circle class="x3s2mfjco"/><path class="ljf4szb9j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:clapper-board"} {...others} />);
}

export default Component;
