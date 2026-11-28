import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h5fsocc0g.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/ts44bdc2p.css';
import '../../css/d/d9vkjnbmf.css';
import '../../css/r/rrslsmpft.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h5fsocc0g secondary"/><g class="dt0cm9dhy primary"><path class="ts44bdc2p"/><path class="d9vkjnbmf"/><path class="rrslsmpft"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:cpu-duo"} {...others} />);
}

export default Component;
