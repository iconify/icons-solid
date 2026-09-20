import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lc2hhacui.css';
import '../../css/u/uiovf1buw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lc2hhacui"/><path class="uiovf1buw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:armchair"} {...others} />);
}

export default Component;
