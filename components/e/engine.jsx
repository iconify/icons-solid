import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/s9zp2rz4u.css';
import '../../css/t/tjk88carh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="s9zp2rz4u"/><path class="tjk88carh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:engine"} {...others} />);
}

export default Component;
