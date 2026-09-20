import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mwfiol2dj.css';
import '../../css/a/auvfzibbj.css';
import '../../css/z/zs3id2b8k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mwfiol2dj"/><rect class="auvfzibbj"/><path class="zs3id2b8k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:gallery-horizontal"} {...others} />);
}

export default Component;
