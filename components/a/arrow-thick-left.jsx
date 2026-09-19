import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ytmj_306w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ytmj_306w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:arrow-thick-left"} {...others} />);
}

export default Component;
