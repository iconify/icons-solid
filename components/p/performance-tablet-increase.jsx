import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/t3cpah65y.css';
import '../../css/t/t0v_vkbga.css';
import '../../css/w/w-kt0j9lf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="t3cpah65y"/><path class="t0v_vkbga"/><path class="w-kt0j9lf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:performance-tablet-increase"} {...others} />);
}

export default Component;
