import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nib94r23y.css';
import '../../css/t/tp8s31b8f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nib94r23y"/><path class="tp8s31b8f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:return-up-forward-outline"} {...others} />);
}

export default Component;
