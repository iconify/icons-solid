import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qll5a5f5p.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qll5a5f5p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:komga-light"} {...others} />);
}

export default Component;
