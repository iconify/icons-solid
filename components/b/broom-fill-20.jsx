import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vr2ks5bvo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vr2ks5bvo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:broom-fill-20"} {...others} />);
}

export default Component;
