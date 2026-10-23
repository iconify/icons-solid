import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yu2xnfbuu.css';
import '../../css/p/pujj3_bxd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yu2xnfbuu"/><path class="pujj3_bxd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:screen-share"} {...others} />);
}

export default Component;
