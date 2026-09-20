import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/uaznomhfo.css';
import '../../css/g/g36-1rlma.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="uaznomhfo"/><path class="g36-1rlma"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:card-send3"} {...others} />);
}

export default Component;
