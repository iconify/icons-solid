import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wupa1pddf.css';
import '../../css/p/pzbh89bvj.css';
import '../../css/r/rfg1cnq_s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wupa1pddf"/><path class="pzbh89bvj"/><path class="rfg1cnq_s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:saving-dog-guard-decrease"} {...others} />);
}

export default Component;
