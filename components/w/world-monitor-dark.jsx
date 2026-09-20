import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l9t074brf.css';
import '../../css/v/v-7b52b6r.css';
import '../../css/x/xmmjaib5i.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="l9t074brf"/><path class="v-7b52b6r"/><circle class="xmmjaib5i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:world-monitor-dark"} {...others} />);
}

export default Component;
