import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dmb8omyes.css';
import '../../css/s/swe-3q-nj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dmb8omyes"/><path class="swe-3q-nj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:wordpress-logo-1"} {...others} />);
}

export default Component;
