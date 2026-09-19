import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dyswr7zif.css';
import '../../css/i/iq0pnlbab.css';
import '../../css/t/tlhsqgbia.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dyswr7zif"/><path class="iq0pnlbab"/><path class="tlhsqgbia"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mp-402"} {...others} />);
}

export default Component;
