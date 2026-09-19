import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wb59htb_d.css';
import '../../css/k/k4or6zb4x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wb59htb_d"/><path clip-rule="evenodd" class="k4or6zb4x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:key-outline"} {...others} />);
}

export default Component;
