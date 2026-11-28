import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n9gg0n3-k.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/m5mho-e0x.css';
import '../../css/c/cbvzglb0e.css';
import '../../css/f/fbv-j30nd.css';
import '../../css/f/fjk8iknrg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n9gg0n3-k secondary"/><g class="dt0cm9dhy primary"><path class="m5mho-e0x"/><path class="cbvzglb0e"/><path class="fbv-j30nd"/><path class="fjk8iknrg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:cup-soda-duo"} {...others} />);
}

export default Component;
