import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/ayavuab3v.css';
import '../../css/k/kgi4f2boh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ayavuab3v"/><path class="kgi4f2boh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:clipboard-check"} {...others} />);
}

export default Component;
