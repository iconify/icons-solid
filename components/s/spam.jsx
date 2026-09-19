import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/o-my4c6jq.css';
import '../../css/o/o7fygmbeh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="o-my4c6jq"/><path class="o7fygmbeh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:spam"} {...others} />);
}

export default Component;
