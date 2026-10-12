import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tqkp5ilzt.css';
import '../../css/z/zy3ocbcvy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tqkp5ilzt"/><path class="zy3ocbcvy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:sparkle-alt-stroke-20"} {...others} />);
}

export default Component;
