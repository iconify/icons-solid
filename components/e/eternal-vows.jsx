import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uyyu2o1ak.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="uyyu2o1ak"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:eternal-vows"} {...others} />);
}

export default Component;
