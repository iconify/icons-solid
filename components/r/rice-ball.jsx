import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yfkn2s3yl.css';
import '../../css/i/iw3tibb8e.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/o/onxcbabva.css';
import '../../css/l/l-fhgubig.css';
import '../../css/a/a2hu4vb5y.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="yfkn2s3yl"/><path class="iw3tibb8e"/><g class="ij2x_72vy"><path class="onxcbabva"/><path class="l-fhgubig"/><path class="a2hu4vb5y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:rice-ball"} {...others} />);
}

export default Component;
