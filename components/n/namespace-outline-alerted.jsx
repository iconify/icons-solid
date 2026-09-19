import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h_yhajbgl.css';
import '../../css/s/s_tecendb.css';
import '../../css/y/yiybycb-p.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="h_yhajbgl"/><path class="s_tecendb"/><path class="yiybycb-p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:namespace-outline-alerted"} {...others} />);
}

export default Component;
