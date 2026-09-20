import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ier1q-get.css';
import '../../css/y/y4yyrac7j.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ier1q-get"/><path class="y4yyrac7j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-crown"} {...others} />);
}

export default Component;
