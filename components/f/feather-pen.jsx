import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/z/zn5lpdr9u.css';
import '../../css/s/si4-fhbse.css';
import '../../css/y/yl7p83b-u.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="zn5lpdr9u"/><path class="si4-fhbse"/><path class="yl7p83b-u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:feather-pen"} {...others} />);
}

export default Component;
