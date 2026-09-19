import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vgfnrcc8l.css';
import '../../css/u/uce-6cv7i.css';
import '../../css/x/xjsfynbtp.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="vgfnrcc8l"/><path class="uce-6cv7i"/><path transform="scale(.86021 .96774)" class="xjsfynbtp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:aq-4x3"} {...others} />);
}

export default Component;
