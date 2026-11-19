import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rxy12r89z.css';
import '../../css/j/jdijwxbvy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rxy12r89z"/><path class="jdijwxbvy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ph-intercept-light"} {...others} />);
}

export default Component;
