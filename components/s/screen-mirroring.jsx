import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p07tmccvv.css';
import '../../css/m/mtumdmqin.css';
import '../../css/o/o610y3h4y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="p07tmccvv"><path class="mtumdmqin"/><path class="o610y3h4y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:screen-mirroring"} {...others} />);
}

export default Component;
