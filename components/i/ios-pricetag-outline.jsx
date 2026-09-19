import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/klcn6tchx.css';
import '../../css/n/ng1infulf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="klcn6tchx"/><path class="ng1infulf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-pricetag-outline"} {...others} />);
}

export default Component;
