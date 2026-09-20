import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9lfx_ls.css';
import '../../css/w/wdn99oykn.css';
import '../../css/t/trzsg0bwg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="in9lfx_ls"/><path class="wdn99oykn"/><path class="trzsg0bwg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:bazarr"} {...others} />);
}

export default Component;
