import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/u6hb_jkbf.css';
import '../../css/p/pmhz6bbml.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="u6hb_jkbf"/><path class="pmhz6bbml"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bitcoin-02"} {...others} />);
}

export default Component;
