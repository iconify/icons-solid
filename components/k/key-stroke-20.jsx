import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hl5v1rsmq.css';
import '../../css/v/v9rv_hbmi.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hl5v1rsmq"/><path class="v9rv_hbmi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:key-stroke-20"} {...others} />);
}

export default Component;
