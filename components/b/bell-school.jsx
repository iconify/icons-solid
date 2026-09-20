import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cm7blcben.css';
import '../../css/r/rf-v0-ybr.css';
import '../../css/z/zvulze01h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cm7blcben"/><path class="rf-v0-ybr"/><path class="zvulze01h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:bell-school"} {...others} />);
}

export default Component;
