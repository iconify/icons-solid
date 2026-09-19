import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/j/j_h_6urrp.css';
import '../../css/v/vrh7e1bax.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path clip-rule="evenodd" class="j_h_6urrp"/><path class="vrh7e1bax"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:gps"} {...others} />);
}

export default Component;
