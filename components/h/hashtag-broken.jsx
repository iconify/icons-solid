import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/o84h6803r.css';
import '../../css/t/t1in8db2h.css';
import '../../css/s/s41he0bba.css';
import '../../css/m/m-5zcvb8c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="o84h6803r"/><path class="t1in8db2h"/><path class="s41he0bba"/><path class="m-5zcvb8c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hashtag-broken"} {...others} />);
}

export default Component;
