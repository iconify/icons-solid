import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dn1pzokyp.css';
import '../../css/t/tq0y-p-0s.css';
import '../../css/a/ajqhpcbca.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dn1pzokyp"/><path class="tq0y-p-0s"/><path class="ajqhpcbca"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:calendar-remove"} {...others} />);
}

export default Component;
