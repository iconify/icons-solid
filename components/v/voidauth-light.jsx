import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/muhbbxb6a.css';
import '../../css/v/vpv8vrdpm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="muhbbxb6a"/><path class="vpv8vrdpm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:voidauth-light"} {...others} />);
}

export default Component;
