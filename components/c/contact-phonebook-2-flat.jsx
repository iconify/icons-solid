import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c9q50ykjp.css';
import '../../css/s/stnpv2_pr.css';
import '../../css/z/z4hx3cbxj.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="c9q50ykjp"/><path clip-rule="evenodd" class="stnpv2_pr"/><path class="z4hx3cbxj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:contact-phonebook-2-flat"} {...others} />);
}

export default Component;
