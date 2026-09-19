import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vi60pbb-p.css';
import '../../css/v/v3wjsub2s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vi60pbb-p"/><path class="v3wjsub2s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:clock-add"} {...others} />);
}

export default Component;
