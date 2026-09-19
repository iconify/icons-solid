import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u024t_vxb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u024t_vxb"><animateTransform id="SVGKSLUAcIu" attributeName="transform" attributeType="XML" begin="0;SVGKjj5hd4q.end" dur="1s" from="-90 12 12" to="0 12 12" type="rotate"/><animateTransform id="SVGkFYRWcWj" attributeName="transform" attributeType="XML" begin="SVGKSLUAcIu.end" dur="1s" from="0 12 12" to="-90 12 12" type="rotate"/><animateTransform id="SVGKjj5hd4q" attributeName="transform" attributeType="XML" begin="SVGkFYRWcWj.end" dur="1s" from="-90 12 12" to="270 12 12" type="rotate"/></path>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:compass"} {...others} />);
}

export default Component;
