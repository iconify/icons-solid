import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lebqn5bme.css';
import '../../css/a/azsj7yb9j.css';
import '../../css/q/qxdu-bceo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="lebqn5bme"/><path class="azsj7yb9j"/><path class="qxdu-bceo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:medal-star-circle-broken"} {...others} />);
}

export default Component;
