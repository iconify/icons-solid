import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/f603m2bbo.css';
import '../../css/i/iqekx2b4d.css';
import '../../css/t/t433albvq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="f603m2bbo"/><path class="iqekx2b4d"/><path class="t433albvq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:artificial-intelligence-07"} {...others} />);
}

export default Component;
