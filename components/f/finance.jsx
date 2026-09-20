import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gxk-ml5cx.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="gxk-ml5cx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"map:finance"} {...others} />);
}

export default Component;
