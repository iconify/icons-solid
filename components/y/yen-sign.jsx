import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kk-9l5boc.css';

const viewBox = {"width":384,"height":512};
const content = `<path class="kk-9l5boc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:yen-sign"} {...others} />);
}

export default Component;
