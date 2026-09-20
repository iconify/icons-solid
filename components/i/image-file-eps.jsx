import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/mt1g65bni.css';
import '../../css/p/pzv8cpr-l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="mt1g65bni"/><path class="pzv8cpr-l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:image-file-eps"} {...others} />);
}

export default Component;
