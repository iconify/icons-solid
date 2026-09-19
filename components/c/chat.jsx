import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lr7o5cr9r.css';
import '../../css/x/xv07l8uxa.css';
import '../../css/u/u85qrgbvx.css';

const viewBox = {"width":100,"height":100};
const content = `<path clip-rule="evenodd" class="lr7o5cr9r"/><path clip-rule="evenodd" class="xv07l8uxa"/><path class="u85qrgbvx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-ui:chat"} {...others} />);
}

export default Component;
