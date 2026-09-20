import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wayr7zbfg.css';
import '../../css/c/c8pjq2bdi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><rect class="wayr7zbfg"/><path class="c8pjq2bdi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:closed-captions"} {...others} />);
}

export default Component;
