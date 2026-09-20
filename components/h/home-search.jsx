import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wyl1qyuew.css';
import '../../css/d/d6shn0b8n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wyl1qyuew"/><path class="d6shn0b8n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:home-search"} {...others} />);
}

export default Component;
