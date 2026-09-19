import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vc9n9eb3h.css';
import '../../css/z/zxnivje1s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vc9n9eb3h"/><path class="zxnivje1s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:heartgreen"} {...others} />);
}

export default Component;
