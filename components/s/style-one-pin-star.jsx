import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tglc7kbqq.css';
import '../../css/b/bjgbq_xpr.css';
import '../../css/l/l35iu8b9n.css';
import '../../css/f/fdqsbcclx.css';
import '../../css/g/gvypczb-s.css';
import '../../css/i/ihv9dyibw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tglc7kbqq"/><path class="bjgbq_xpr"/><path class="l35iu8b9n"/><path class="fdqsbcclx"/><path class="gvypczb-s"/><path class="ihv9dyibw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:style-one-pin-star"} {...others} />);
}

export default Component;
