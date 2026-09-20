import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xi0-yqbtb.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="xi0-yqbtb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:warning-triangle-solid"} {...others} />);
}

export default Component;
