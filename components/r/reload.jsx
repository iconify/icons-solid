import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/t/txfwrhien.css';
import '../../css/z/zew7e1b0p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="txfwrhien"/><path class="zew7e1b0p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:reload"} {...others} />);
}

export default Component;
