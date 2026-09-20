import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/z/z7y8n2bxg.css';
import '../../css/f/f-810pbxi.css';
import '../../css/e/e-46imleb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="z7y8n2bxg"/><path class="f-810pbxi"/><path class="e-46imleb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:pokeball"} {...others} />);
}

export default Component;
