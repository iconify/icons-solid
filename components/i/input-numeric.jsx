import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rar4--bxa.css';
import '../../css/k/k0n026mjj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rar4--bxa"/><path class="k0n026mjj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:input-numeric"} {...others} />);
}

export default Component;
