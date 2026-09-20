import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xfrlmxrjn.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="xfrlmxrjn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:dangerous-zone-sign-solid"} {...others} />);
}

export default Component;
