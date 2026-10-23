import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uowibjbpy.css';
import '../../css/y/ypbp7r2so.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="uowibjbpy"/><path class="ypbp7r2so"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:printer-x"} {...others} />);
}

export default Component;
