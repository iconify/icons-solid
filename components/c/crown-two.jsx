import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/y/y6f0jibvm.css';
import '../../css/w/wz6zuccju.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="y6f0jibvm"/><path class="wz6zuccju"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:crown-two"} {...others} />);
}

export default Component;
