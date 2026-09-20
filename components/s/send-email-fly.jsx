import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/cfc8dbu4o.css';
import '../../css/o/o6hzein6s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="cfc8dbu4o"/><path class="o6hzein6s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:send-email-fly"} {...others} />);
}

export default Component;
