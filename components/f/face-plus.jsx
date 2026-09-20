import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v7e-66j0p.css';
import '../../css/l/lr-f1mf1k.css';
import '../../css/c/c12t-giiy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="v7e-66j0p"/><path class="lr-f1mf1k"/><path class="c12t-giiy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:face-plus"} {...others} />);
}

export default Component;
