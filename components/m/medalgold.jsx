import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zj95oqvmv.css';

const viewBox = {"width":1026,"height":1025};
const content = `<path class="zj95oqvmv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:medalgold"} {...others} />);
}

export default Component;
