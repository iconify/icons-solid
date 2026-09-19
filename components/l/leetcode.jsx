import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wkm7mbckp.css';
import '../../css/s/s4uphz44s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wkm7mbckp"/><path class="s4uphz44s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:leetcode"} {...others} />);
}

export default Component;
