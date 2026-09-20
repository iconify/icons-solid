import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/j/jzvf1uujd.css';
import '../../css/t/tp_z2nbga.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="jzvf1uujd"/><path class="tp_z2nbga"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:color-picker"} {...others} />);
}

export default Component;
