import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ifrmrz2jc.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="ifrmrz2jc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:hand-held-tablet-writing-solid"} {...others} />);
}

export default Component;
