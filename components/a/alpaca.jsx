import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aywch1mse.css';
import '../../css/o/ovj99gbqx.css';
import '../../css/q/q0upuzb_s.css';

const viewBox = {"width":1081,"height":309};
const content = `<path class="aywch1mse"/><path clip-rule="evenodd" class="ovj99gbqx"/><path class="q0upuzb_s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:alpaca"} {...others} />);
}

export default Component;
