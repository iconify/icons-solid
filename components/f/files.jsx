import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dv0tblbtb.css';
import '../../css/m/mn0p9jmip.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dv0tblbtb"/><path class="mn0p9jmip"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:files"} {...others} />);
}

export default Component;
