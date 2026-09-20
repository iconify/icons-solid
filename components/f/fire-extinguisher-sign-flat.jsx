import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a02antp3a.css';
import '../../css/c/cant2cbbp.css';
import '../../css/m/m4t_r_bbn.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="a02antp3a"/><path clip-rule="evenodd" class="cant2cbbp"/><path class="m4t_r_bbn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:fire-extinguisher-sign-flat"} {...others} />);
}

export default Component;
