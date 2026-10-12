import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g54y4lblw.css';
import '../../css/y/y_gz6g1bt.css';
import '../../css/m/mjhxvsbch.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="rotate(-90 4.59 22.2)" class="g54y4lblw"/><rect transform="rotate(-90 4.59 22.2)" class="y_gz6g1bt"/><path class="mjhxvsbch"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:split-vertical"} {...others} />);
}

export default Component;
