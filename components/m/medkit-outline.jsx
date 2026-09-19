import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ecffrn81e.css';
import '../../css/z/zzs6n-cer.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="ecffrn81e"/><path class="zzs6n-cer"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:medkit-outline"} {...others} />);
}

export default Component;
