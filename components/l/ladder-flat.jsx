import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tj6a17ihb.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="tj6a17ihb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:ladder-flat"} {...others} />);
}

export default Component;
