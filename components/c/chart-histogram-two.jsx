import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yetkoc4zx.css';
import '../../css/t/twzr5ub1p.css';
import '../../css/z/zcajn8bhw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="yetkoc4zx"/><path class="twzr5ub1p"/><path class="zcajn8bhw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:chart-histogram-two"} {...others} />);
}

export default Component;
