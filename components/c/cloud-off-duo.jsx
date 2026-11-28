import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lkgs06hvj.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/i3frhyb2m.css';
import '../../css/c/c3c_ciakh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lkgs06hvj secondary"/><g class="dt0cm9dhy primary"><path class="i3frhyb2m"/><path class="c3c_ciakh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:cloud-off-duo"} {...others} />);
}

export default Component;
