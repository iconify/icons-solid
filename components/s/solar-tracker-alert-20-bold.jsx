import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d29mtoyfh.css';
import '../../css/q/ql747jj8q.css';
import '../../css/g/gw2pyczoa.css';
import '../../css/l/legp_2b7m.css';
import '../../css/j/jeyqzjnhx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="d29mtoyfh"/><path class="ql747jj8q"/><path class="gw2pyczoa"/><path class="legp_2b7m"/><path class="jeyqzjnhx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-tracker-alert-20-bold"} {...others} />);
}

export default Component;
