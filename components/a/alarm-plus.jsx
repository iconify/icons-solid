import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k1q-f9vcx.css';
import '../../css/u/uyp_7-bvg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k1q-f9vcx"/><path class="uyp_7-bvg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:alarm-plus"} {...others} />);
}

export default Component;
