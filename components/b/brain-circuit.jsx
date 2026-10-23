import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hcho6lbdt.css';
import '../../css/c/cjhlfacur.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hcho6lbdt"/><path class="cjhlfacur"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:brain-circuit"} {...others} />);
}

export default Component;
