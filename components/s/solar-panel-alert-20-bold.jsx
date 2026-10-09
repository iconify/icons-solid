import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jsqrtwbgr.css';
import '../../css/y/y3ygpgbwz.css';
import '../../css/e/eia-tm77s.css';
import '../../css/f/fd646mbuc.css';
import '../../css/e/ehc07rbtk.css';
import '../../css/g/gdzsnomjv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jsqrtwbgr"/><path class="y3ygpgbwz"/><path class="eia-tm77s"/><path class="fd646mbuc"/><path class="ehc07rbtk"/><path class="gdzsnomjv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-panel-alert-20-bold"} {...others} />);
}

export default Component;
