import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zfn0bibwp.css';
import '../../css/k/kh2blbc8t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zfn0bibwp"/><path class="kh2blbc8t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:binoculars"} {...others} />);
}

export default Component;
