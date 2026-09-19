import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hhb8c01ug.css';
import '../../css/k/ke5zifg1a.css';
import '../../css/b/b1feiqias.css';
import '../../css/k/kppkn-rpw.css';
import '../../css/o/o592z9scf.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hhb8c01ug"><path class="ke5zifg1a"/><path class="b1feiqias"/><path class="kppkn-rpw"/><path class="o592z9scf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:jest"} {...others} />);
}

export default Component;
