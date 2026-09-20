import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wlp_js4cf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wlp_js4cf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pequeroku-dark"} {...others} />);
}

export default Component;
