import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n8nqn8_oz.css';
import '../../css/w/wmbsorbdp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="n8nqn8_oz"/><path class="wmbsorbdp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:hand-stop"} {...others} />);
}

export default Component;
