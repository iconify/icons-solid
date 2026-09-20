import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/klt1_8xud.css';
import '../../css/e/e7x5opbnz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="klt1_8xud"/><path class="e7x5opbnz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:light-bulb-electricity"} {...others} />);
}

export default Component;
