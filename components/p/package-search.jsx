import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bobsky67x.css';
import '../../css/k/k4p3_pn2r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bobsky67x"/><path class="k4p3_pn2r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:package-search"} {...others} />);
}

export default Component;
