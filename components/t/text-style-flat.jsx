import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b44m8kb1i.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="b44m8kb1i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:text-style-flat"} {...others} />);
}

export default Component;
