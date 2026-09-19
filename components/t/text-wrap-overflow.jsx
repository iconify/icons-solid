import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/e/e4e7ycc4p.css';
import '../../css/r/rzk808bet.css';
import '../../css/t/thslmvuva.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="e4e7ycc4p"/><path class="rzk808bet"/><path class="thslmvuva"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:text-wrap-overflow"} {...others} />);
}

export default Component;
