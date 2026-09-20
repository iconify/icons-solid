import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l-gwxdbcp.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="l-gwxdbcp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:sun-cloud-remix"} {...others} />);
}

export default Component;
