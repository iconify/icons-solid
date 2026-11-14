import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/d016gac1x.css';
import '../../css/g/g4zs08s-q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="d016gac1x"/><path class="g4zs08s-q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:thumbs-up-ellipse"} {...others} />);
}

export default Component;
