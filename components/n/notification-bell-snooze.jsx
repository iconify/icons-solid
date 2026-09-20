import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/ugiz7t7da.css';
import '../../css/f/frddjy6ne.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ugiz7t7da"/><path class="frddjy6ne"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:notification-bell-snooze"} {...others} />);
}

export default Component;
