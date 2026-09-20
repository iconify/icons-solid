import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/fhvfp_bvz.css';
import '../../css/f/ftat9xxjt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="fhvfp_bvz"/><path class="ftat9xxjt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:arrow-circle-left"} {...others} />);
}

export default Component;
