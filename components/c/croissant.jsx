import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/po169iqid.css';
import '../../css/u/u4479eb3g.css';
import '../../css/l/l85g3udky.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="po169iqid"/><path class="u4479eb3g"/><path class="l85g3udky"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:croissant"} {...others} />);
}

export default Component;
