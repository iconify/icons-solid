import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c-78cfw_o.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="c-78cfw_o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:block-2-flat"} {...others} />);
}

export default Component;
