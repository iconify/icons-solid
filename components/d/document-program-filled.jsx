import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uilm590_x.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="uilm590_x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:document-program-filled"} {...others} />);
}

export default Component;
