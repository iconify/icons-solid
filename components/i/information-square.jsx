import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/n/nl4j3gbuu.css';
import '../../css/f/fayk6ibbo.css';
import '../../css/z/z7h9dmbpz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="nl4j3gbuu"/><path class="fayk6ibbo"/><rect class="z7h9dmbpz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:information-square"} {...others} />);
}

export default Component;
