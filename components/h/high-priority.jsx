import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i_vq-abkk.css';
import '../../css/i/i83sn7bif.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="i_vq-abkk"/><path class="i83sn7bif"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:high-priority"} {...others} />);
}

export default Component;
