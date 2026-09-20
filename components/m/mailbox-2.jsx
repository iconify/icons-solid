import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/h/hc45gi6aw.css';
import '../../css/q/qtqoj9bun.css';
import '../../css/u/u8ukx9bdj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="hc45gi6aw"/><path class="qtqoj9bun"/><path class="u8ukx9bdj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:mailbox-2"} {...others} />);
}

export default Component;
