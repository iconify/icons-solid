import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/ym5aw5b8u.css';
import '../../css/s/smdkeehst.css';
import '../../css/r/rw7cyfbex.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ym5aw5b8u"/><path class="smdkeehst"/><path class="rw7cyfbex"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:water-line-duotone"} {...others} />);
}

export default Component;
