import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r8b3tsbxv.css';
import '../../css/e/ets3hjqlz.css';
import '../../css/c/cbsg9jbek.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="r8b3tsbxv"/><path class="ets3hjqlz"/><path class="cbsg9jbek"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:signpost-bold-duotone"} {...others} />);
}

export default Component;
