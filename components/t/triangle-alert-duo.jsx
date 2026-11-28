import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y7nnwqbzr.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/cx-db_bvv.css';
import '../../css/r/re_xy969r.css';
import '../../css/o/o03gqvbuw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary y7nnwqbzr"/><g class="dt0cm9dhy primary"><path class="cx-db_bvv"/><path class="re_xy969r"/><path class="o03gqvbuw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:triangle-alert-duo"} {...others} />);
}

export default Component;
