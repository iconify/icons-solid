import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/m9v85de3k.css';
import '../../css/n/nhknek4be.css';
import '../../css/a/a2e2ku32f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="m9v85de3k"/><path class="nhknek4be"/><path class="a2e2ku32f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:text-compact-duo"} {...others} />);
}

export default Component;
