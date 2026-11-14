import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vbk95qvou.css';
import '../../css/f/f5_2c54hf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="vbk95qvou"/><path class="f5_2c54hf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:call-internal"} {...others} />);
}

export default Component;
