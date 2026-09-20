import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jdmw0mdax.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jdmw0mdax"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:wavelog-light"} {...others} />);
}

export default Component;
