import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l9t074brf.css';
import '../../css/o/o_5jqwb6l.css';
import '../../css/s/s8uw1xbpw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="l9t074brf"/><path class="o_5jqwb6l"/><circle class="s8uw1xbpw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:world-monitor-dark"} {...others} />);
}

export default Component;
