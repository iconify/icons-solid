import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/her8kwbdd.css';
import '../../css/t/to9oudbka.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="her8kwbdd"/><path class="to9oudbka"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:calculator-01"} {...others} />);
}

export default Component;
