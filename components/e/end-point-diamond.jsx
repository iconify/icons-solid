import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/h/h06m-9fze.css';
import '../../css/y/y93y_olkh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="h06m-9fze"/><path class="y93y_olkh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:end-point-diamond"} {...others} />);
}

export default Component;
