import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p07tmccvv.css';
import '../../css/i/irlfzhbar.css';
import '../../css/d/d35q-bz6i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="p07tmccvv"><path class="irlfzhbar"/><path class="d35q-bz6i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:task-checked-1"} {...others} />);
}

export default Component;
