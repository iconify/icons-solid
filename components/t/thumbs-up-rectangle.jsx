import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gw3ve7bqp.css';
import '../../css/f/futg-niav.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gw3ve7bqp"/><path class="futg-niav"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:thumbs-up-rectangle"} {...others} />);
}

export default Component;
