import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y76tjhvwb.css';
import '../../css/e/ebn2v62aa.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="y76tjhvwb"/><path class="ebn2v62aa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:rss-bridge"} {...others} />);
}

export default Component;
