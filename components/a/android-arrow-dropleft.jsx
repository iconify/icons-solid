import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rv-v65iws.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rv-v65iws"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:android-arrow-dropleft"} {...others} />);
}

export default Component;
