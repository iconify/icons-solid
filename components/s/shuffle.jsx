import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uhg1i7brs.css';
import '../../css/g/gyp_jrbdc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="uhg1i7brs"/><path class="gyp_jrbdc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:shuffle"} {...others} />);
}

export default Component;
