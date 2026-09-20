import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hbl0xbc2l.css';
import '../../css/x/xjlgtab5d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="hbl0xbc2l"/><path class="xjlgtab5d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:cancel-square"} {...others} />);
}

export default Component;
