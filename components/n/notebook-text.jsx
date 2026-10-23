import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c48u0eb2f.css';
import '../../css/f/fe6p-1bym.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="c48u0eb2f"/><path class="fe6p-1bym"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:notebook-text"} {...others} />);
}

export default Component;
