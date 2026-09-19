import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/a_9gjeb9i.css';
import '../../css/d/dzqmh_brh.css';
import '../../css/g/gi37vtblb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="a_9gjeb9i"/><path class="dzqmh_brh"/><path class="gi37vtblb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:money-03"} {...others} />);
}

export default Component;
