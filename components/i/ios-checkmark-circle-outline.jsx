import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nvk93ab1t.css';
import '../../css/l/lalksfbhk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nvk93ab1t"/><path class="lalksfbhk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-checkmark-circle-outline"} {...others} />);
}

export default Component;
