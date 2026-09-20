import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/c/c1r0hdchf.css';
import '../../css/t/tyyddl8mo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="c1r0hdchf"/><path class="tyyddl8mo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:bubble-chat-text-setting"} {...others} />);
}

export default Component;
