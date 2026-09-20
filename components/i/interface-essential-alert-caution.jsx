import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s1tihnb2l.css';
import '../../css/q/qersjhb_f.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="s1tihnb2l"/><path class="qersjhb_f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-alert-caution"} {...others} />);
}

export default Component;
