import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g9v53-bgm.css';
import '../../css/j/jdjv04bbq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="g9v53-bgm"/><path class="jdjv04bbq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:search-check"} {...others} />);
}

export default Component;
