import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bjaxmebek.css';
import '../../css/s/sieo8jb0y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bjaxmebek"/><path class="sieo8jb0y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:ribbon"} {...others} />);
}

export default Component;
