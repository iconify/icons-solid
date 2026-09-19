import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/l/lcz-itbyl.css';
import '../../css/e/el_008dkm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="lcz-itbyl"/><path class="el_008dkm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:success"} {...others} />);
}

export default Component;
