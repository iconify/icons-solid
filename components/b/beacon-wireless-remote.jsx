import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rmr4eachp.css';
import '../../css/n/n5p9m7b4g.css';
import '../../css/j/jbvm5nb7b.css';
import '../../css/y/y__psy2rv.css';
import '../../css/c/c6pwwrb-g.css';
import '../../css/z/zrsh6-bkp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rmr4eachp"/><path class="n5p9m7b4g"/><path class="jbvm5nb7b"/><path class="y__psy2rv"/><path class="c6pwwrb-g"/><path class="zrsh6-bkp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:beacon-wireless-remote"} {...others} />);
}

export default Component;
