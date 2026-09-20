import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bjtd44buw.css';
import '../../css/t/tkkp7gb-e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bjtd44buw"/><path class="tkkp7gb-e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:lets-encrypt"} {...others} />);
}

export default Component;
