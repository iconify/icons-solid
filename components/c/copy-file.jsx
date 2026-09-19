import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rteynoumo.css';
import '../../css/z/zzp6lsbpn.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="rteynoumo"/><path class="zzp6lsbpn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:copy-file"} {...others} />);
}

export default Component;
