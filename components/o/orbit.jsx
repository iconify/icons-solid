import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hqd8fcboz.css';
import '../../css/k/kl149rbvc.css';
import '../../css/c/cnrn66j_x.css';
import '../../css/g/gkp1rfbjm.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="hqd8fcboz"><circle class="kl149rbvc"/><path class="cnrn66j_x"/><path class="gkp1rfbjm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gala:orbit"} {...others} />);
}

export default Component;
