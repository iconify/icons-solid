import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/w/w9hvr_bys.css';
import '../../css/y/yyt_2ob4m.css';
import '../../css/a/abnqwbbcj.css';
import '../../css/f/fv__vyeld.css';
import '../../css/k/k9rtv2gam.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="w9hvr_bys"/><path class="yyt_2ob4m"/><path class="abnqwbbcj"/><path class="fv__vyeld"/><path class="k9rtv2gam"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:strategy-tasks"} {...others} />);
}

export default Component;
