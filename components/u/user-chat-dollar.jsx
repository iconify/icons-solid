import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/f/fch71nbbb.css';
import '../../css/o/o9pzl2byt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="fch71nbbb"/><path class="o9pzl2byt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:user-chat-dollar"} {...others} />);
}

export default Component;
