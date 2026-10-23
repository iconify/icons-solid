import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pwqdusbsi.css';
import '../../css/q/q41l-_glf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pwqdusbsi"/><path class="q41l-_glf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:lasso-select"} {...others} />);
}

export default Component;
