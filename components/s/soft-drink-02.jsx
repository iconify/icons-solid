import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l4fsw9bdc.css';
import '../../css/h/h0tpptbts.css';
import '../../css/z/z668_ubuw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="l4fsw9bdc"/><path class="h0tpptbts"/><path class="z668_ubuw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:soft-drink-02"} {...others} />);
}

export default Component;
