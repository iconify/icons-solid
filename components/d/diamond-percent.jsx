import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/sug7t4bis.css';
import '../../css/p/pgq_abozv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="sug7t4bis"/><path class="pgq_abozv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:diamond-percent"} {...others} />);
}

export default Component;
