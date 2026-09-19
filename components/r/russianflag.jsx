import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p0npbyq9r.css';
import '../../css/r/rxc-hlbwa.css';
import '../../css/w/wutugpbrb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p0npbyq9r"/><path class="rxc-hlbwa"/><path class="wutugpbrb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:russianflag"} {...others} />);
}

export default Component;
