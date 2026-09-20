import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s3kqs_pxg.css';
import '../../css/n/nrtos7ylu.css';
import '../../css/h/hcrmp_nmg.css';
import '../../css/d/d23he_y3v.css';
import '../../css/t/tyuiy3b4j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="s3kqs_pxg"/><path class="nrtos7ylu"/><path class="hcrmp_nmg"/><path class="d23he_y3v"/><path class="tyuiy3b4j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:website-development-browser-page-layout"} {...others} />);
}

export default Component;
