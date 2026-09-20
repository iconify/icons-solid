import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qapg4nbep.css';
import '../../css/x/xtc8foe2n.css';
import '../../css/t/tqa0n8bym.css';
import '../../css/j/jfwgumbcn.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qapg4nbep"/><path class="xtc8foe2n"/><path class="tqa0n8bym"/><path class="jfwgumbcn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:hair"} {...others} />);
}

export default Component;
