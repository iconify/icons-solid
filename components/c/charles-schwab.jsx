import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ckkr5xbvl.css';
import '../../css/z/zp5j1oj1u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ckkr5xbvl"/><path class="zp5j1oj1u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:charles-schwab"} {...others} />);
}

export default Component;
