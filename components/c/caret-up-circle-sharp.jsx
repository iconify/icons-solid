import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vambye8bi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vambye8bi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:caret-up-circle-sharp"} {...others} />);
}

export default Component;
