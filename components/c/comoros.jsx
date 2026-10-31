import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ube0ylbed.css';
import '../../css/d/d73ovybpc.css';
import '../../css/u/upkzhhbkg.css';
import '../../css/f/f-ozn4blu.css';
import '../../css/m/m-3w7fb6z.css';
import '../../css/h/h-u7p0bzv.css';
import '../../css/t/tpp_zt08c.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="ube0ylbed"/><path class="d73ovybpc"/><path class="upkzhhbkg"/><path class="f-ozn4blu"/><path class="m-3w7fb6z"/><path class="h-u7p0bzv"/><path class="tpp_zt08c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:comoros"} {...others} />);
}

export default Component;
