import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mjrm5gbml.css';
import '../../css/s/s8_oe2bnc.css';
import '../../css/g/g3-xqtbdt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mjrm5gbml"/><path class="s8_oe2bnc"/><path class="g3-xqtbdt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:cloud-download"} {...others} />);
}

export default Component;
