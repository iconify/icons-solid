import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y0zzapbzv.css';
import '../../css/o/on2puab-k.css';
import '../../css/h/hiw3sh29t.css';
import '../../css/s/svtmvzbpa.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="y0zzapbzv"/><rect class="on2puab-k"/><rect class="hiw3sh29t"/><path class="svtmvzbpa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:projector-one"} {...others} />);
}

export default Component;
