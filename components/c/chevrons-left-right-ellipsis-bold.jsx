import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qz625mb3h.css';
import '../../css/v/vfll34fsr.css';
import '../../css/v/v69b44b0n.css';
import '../../css/u/uwtypmg-l.css';
import '../../css/j/jo4v5sbsx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qz625mb3h"/><path class="vfll34fsr"/><path class="v69b44b0n"/><path class="uwtypmg-l"/><path class="jo4v5sbsx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chevrons-left-right-ellipsis-bold"} {...others} />);
}

export default Component;
