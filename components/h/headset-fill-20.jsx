import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hs_dfacjm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hs_dfacjm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:headset-fill-20"} {...others} />);
}

export default Component;
