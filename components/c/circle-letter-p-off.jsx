import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q3nam9bnd.css';
import '../../css/i/i7_3hcc3w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="q3nam9bnd"/><path class="i7_3hcc3w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:circle-letter-p-off"} {...others} />);
}

export default Component;
