import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fwn4e46yu.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="fwn4e46yu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:arrow-curvy-up-down-2-flat"} {...others} />);
}

export default Component;
