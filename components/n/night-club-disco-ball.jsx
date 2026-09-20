import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rkyz1ebpw.css';
import '../../css/a/ar3yodb8t.css';
import '../../css/y/y88m-0toy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rkyz1ebpw"/><path class="ar3yodb8t"/><path class="y88m-0toy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:night-club-disco-ball"} {...others} />);
}

export default Component;
