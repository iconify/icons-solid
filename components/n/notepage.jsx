import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/izoaahe4v.css';
import '../../css/z/zrb4p4b7f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="izoaahe4v"/><path class="zrb4p4b7f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:notepage"} {...others} />);
}

export default Component;
