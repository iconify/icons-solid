import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vxo3gieyf.css';
import '../../css/o/o2evp6bma.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="vxo3gieyf"/><path class="o2evp6bma"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:cog"} {...others} />);
}

export default Component;
