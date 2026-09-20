import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/ft2eftbti.css';
import '../../css/d/dv6askbfw.css';
import '../../css/y/yeukrqbeq.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ft2eftbti"/><path class="dv6askbfw"/><path clip-rule="evenodd" class="yeukrqbeq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:safe-vault-flat"} {...others} />);
}

export default Component;
