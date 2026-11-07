import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wk5fq_b9n.css';
import '../../css/z/zgs7zguvi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wk5fq_b9n"/><path class="zgs7zguvi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dumbbells-2-broken"} {...others} />);
}

export default Component;
