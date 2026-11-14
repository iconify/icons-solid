import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/i1ztvptby.css';
import '../../css/i/ib1bldbbn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="i1ztvptby"/><path class="ib1bldbbn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:address-book"} {...others} />);
}

export default Component;
