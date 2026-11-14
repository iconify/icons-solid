import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pl8jhib9i.css';
import '../../css/f/f5_2c54hf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="pl8jhib9i"/><path class="f5_2c54hf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:call-internal-02"} {...others} />);
}

export default Component;
