import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v6f0jichf.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/u50chrd7i.css';
import '../../css/u/u-5ljab_d.css';
import '../../css/u/uk5v5mblj.css';
import '../../css/i/iwkdp9bgv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary v6f0jichf"/><g class="dt0cm9dhy primary"><path class="u50chrd7i"/><path class="u-5ljab_d"/><path class="uk5v5mblj"/><path class="iwkdp9bgv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:three-fingers-duo"} {...others} />);
}

export default Component;
