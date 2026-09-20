import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/k2l5sr19w.css';
import '../../css/s/s_l2ehbks.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="k2l5sr19w"/><path class="s_l2ehbks"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:safe-vault"} {...others} />);
}

export default Component;
