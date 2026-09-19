import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yruwzs0qg.css';
import '../../css/x/xv8czdbir.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yruwzs0qg"/><path class="xv8czdbir"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:create-outline"} {...others} />);
}

export default Component;
