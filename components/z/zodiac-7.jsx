import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zukfnb_jc.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="zukfnb_jc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:zodiac-7"} {...others} />);
}

export default Component;
