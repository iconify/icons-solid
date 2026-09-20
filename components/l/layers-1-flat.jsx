import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cnopx-bph.css';
import '../../css/j/j8p6ujtpx.css';
import '../../css/k/knmiz-ibv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="cnopx-bph"/><path class="j8p6ujtpx"/><path class="knmiz-ibv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:layers-1-flat"} {...others} />);
}

export default Component;
