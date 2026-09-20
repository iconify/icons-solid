import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k8i5lmblk.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="k8i5lmblk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:person-jumping-on-bouncy-cushion"} {...others} />);
}

export default Component;
