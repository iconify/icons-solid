import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xgy1eqqss.css';
import '../../css/l/lmvxib9oy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xgy1eqqss"/><path class="lmvxib9oy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:number-6"} {...others} />);
}

export default Component;
