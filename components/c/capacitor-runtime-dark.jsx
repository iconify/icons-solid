import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wrw7cvbwr.css';
import '../../css/k/kqpp9twbz.css';
import '../../css/u/up9gopgdj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wrw7cvbwr"/><path class="kqpp9twbz"/><path class="up9gopgdj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:capacitor-runtime-dark"} {...others} />);
}

export default Component;
