import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/igxg7ab5n.css';
import '../../css/n/ni2kd7y2o.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="igxg7ab5n"/><path class="ni2kd7y2o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:sunshine-light"} {...others} />);
}

export default Component;
