import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n3lzwvbgs.css';
import '../../css/l/lcfo8_bek.css';
import '../../css/t/tiy7a-vsh.css';
import '../../css/n/n-k1pzbhc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n3lzwvbgs"/><path class="lcfo8_bek"/><path class="tiy7a-vsh"/><path class="n-k1pzbhc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:table-minimalistic-bold"} {...others} />);
}

export default Component;
