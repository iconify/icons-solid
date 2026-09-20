import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p07tmccvv.css';
import '../../css/s/sfeb5af-i.css';
import '../../css/m/m6i9scbyq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="p07tmccvv"><path class="sfeb5af-i"/><path class="m6i9scbyq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:chart-scatter"} {...others} />);
}

export default Component;
