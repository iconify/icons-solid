import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/emu51xc3a.css';
import '../../css/g/gblnhkdce.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="emu51xc3a"/><circle class="gblnhkdce"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:location-filled"} {...others} />);
}

export default Component;
