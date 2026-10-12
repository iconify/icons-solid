import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xphq9lb9l.css';
import '../../css/d/d32lng5vc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xphq9lb9l"/><path class="d32lng5vc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:exclamation-circle-stroke-20"} {...others} />);
}

export default Component;
