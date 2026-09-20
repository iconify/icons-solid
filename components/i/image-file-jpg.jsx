import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/j9yaa7bji.css';
import '../../css/l/lyivv0-5g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="j9yaa7bji"/><path class="lyivv0-5g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:image-file-jpg"} {...others} />);
}

export default Component;
