import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e9mrh07zw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e9mrh07zw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:minus-circle-1"} {...others} />);
}

export default Component;
