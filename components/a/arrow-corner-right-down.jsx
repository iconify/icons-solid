import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/sc-419bse.css';
import '../../css/i/i8xc3jo0b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="sc-419bse"/><path class="i8xc3jo0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:arrow-corner-right-down"} {...others} />);
}

export default Component;
