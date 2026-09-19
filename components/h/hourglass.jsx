import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/czqafj_vu.css';
import '../../css/p/p-tfcl_2e.css';
import '../../css/v/vzl9k4bvq.css';

const viewBox = {"width":24,"height":24};
const content = `<g><path class="czqafj_vu"><animate id="SVGFjnOndxt" fill="freeze" attributeName="opacity" begin="0;SVGn6mLadge.end" dur="2s" from="1" to="0"/></path><path class="p-tfcl_2e"><animate fill="freeze" attributeName="opacity" begin="0;SVGn6mLadge.end" dur="2s" from="0" to="1"/></path><path class="vzl9k4bvq"/><animateTransform id="SVGn6mLadge" attributeName="transform" attributeType="XML" begin="SVGFjnOndxt.end" dur="0.5s" from="0 12 12" to="180 12 12" type="rotate"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:hourglass"} {...others} />);
}

export default Component;
