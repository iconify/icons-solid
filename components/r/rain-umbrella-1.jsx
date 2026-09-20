import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/emth_bcde.css';
import '../../css/j/j4dyh3b5j.css';
import '../../css/y/yhd2noblb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="emth_bcde"/><path class="j4dyh3b5j"/><path class="yhd2noblb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:rain-umbrella-1"} {...others} />);
}

export default Component;
