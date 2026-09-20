import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dddim5jqu.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="dddim5jqu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:command-flat"} {...others} />);
}

export default Component;
