import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h2_1icpng.css';
import '../../css/x/xi4z0dojk.css';
import '../../css/h/hltazq3ru.css';
import '../../css/o/o_a2bsbat.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h2_1icpng"/><path class="xi4z0dojk"/><path class="hltazq3ru"/><path class="o_a2bsbat"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:vertical-align-bottom1"} {...others} />);
}

export default Component;
