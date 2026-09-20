import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r82ygfb2l.css';
import '../../css/u/uc85edb9x.css';
import '../../css/h/hyek6xbfu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="r82ygfb2l"/><path class="uc85edb9x"/><path class="hyek6xbfu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:recycle-bin-3-flat"} {...others} />);
}

export default Component;
