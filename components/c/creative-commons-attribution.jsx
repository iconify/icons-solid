import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cc5y2oeui.css';
import '../../css/g/g3xid1tzo.css';
import '../../css/i/i_60hekpa.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="cc5y2oeui"/><circle class="g3xid1tzo"/><path clip-rule="evenodd" class="i_60hekpa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo:creative-commons-attribution"} {...others} />);
}

export default Component;
