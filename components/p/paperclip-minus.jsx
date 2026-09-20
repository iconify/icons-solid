import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lx1s_bbyb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lx1s_bbyb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:paperclip-minus"} {...others} />);
}

export default Component;
