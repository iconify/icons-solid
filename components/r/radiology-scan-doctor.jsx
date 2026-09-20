import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/d37y3xbtx.css';
import '../../css/m/m55tlb_gu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="d37y3xbtx"/><path class="m55tlb_gu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:radiology-scan-doctor"} {...others} />);
}

export default Component;
