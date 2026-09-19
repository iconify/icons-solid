import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pdn_hb7jm.css';

const viewBox = {"width":704,"height":1024};
const content = `<path class="pdn_hb7jm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:bitcoin"} {...others} />);
}

export default Component;
