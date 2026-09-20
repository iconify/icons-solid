import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hxpyivboc.css';
import '../../css/l/l1ls72bcq.css';
import '../../css/e/et1igft8z.css';
import '../../css/g/gtwke1gzy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hxpyivboc"/><path class="l1ls72bcq"/><path class="et1igft8z"/><path class="gtwke1gzy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:pen-fluorescence"} {...others} />);
}

export default Component;
