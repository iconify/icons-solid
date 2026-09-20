import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/cy923qqxz.css';
import '../../css/o/owm4kbtec.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="cy923qqxz"/><path class="owm4kbtec"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:align-back-2"} {...others} />);
}

export default Component;
