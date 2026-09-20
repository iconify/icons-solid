import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wz1o6hb3j.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="wz1o6hb3j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:navigation-arrow-off"} {...others} />);
}

export default Component;
