import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mr1utis7l.css';
import '../../css/e/ey2w9mdkp.css';
import '../../css/h/hg8zt48lg.css';
import '../../css/r/r7vaarvpx.css';
import '../../css/h/h5a7nmbfd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mr1utis7l"/><path class="ey2w9mdkp"/><path class="hg8zt48lg"/><path class="r7vaarvpx"/><path class="h5a7nmbfd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:thermometer-droplets"} {...others} />);
}

export default Component;
