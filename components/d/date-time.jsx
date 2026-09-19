import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/fyjn6sbuz.css';
import '../../css/q/qnic43b3h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="fyjn6sbuz"/><path class="qnic43b3h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:date-time"} {...others} />);
}

export default Component;
