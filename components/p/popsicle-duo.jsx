import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n5fyo4d1q.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bmziltboo.css';
import '../../css/r/r05wzkk_i.css';
import '../../css/a/a7nqjfrbl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n5fyo4d1q secondary"/><g class="dt0cm9dhy primary"><path class="bmziltboo"/><path class="r05wzkk_i"/><path class="a7nqjfrbl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:popsicle-duo"} {...others} />);
}

export default Component;
