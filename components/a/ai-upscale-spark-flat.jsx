import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/l/lbwnvfbkt.css';
import '../../css/j/jrt5-m2nc.css';
import '../../css/l/lyssfii6o.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="lbwnvfbkt"/><path class="jrt5-m2nc"/><path class="lyssfii6o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:ai-upscale-spark-flat"} {...others} />);
}

export default Component;
