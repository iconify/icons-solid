import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ypbg_2eib.css';
import '../../css/o/o-6m668yd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ypbg_2eib"/><path class="o-6m668yd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:square-square"} {...others} />);
}

export default Component;
