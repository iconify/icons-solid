import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wl90geboo.css';
import '../../css/h/h695rk-bi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wl90geboo"/><path class="h695rk-bi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:exchange-cny-fill"} {...others} />);
}

export default Component;
