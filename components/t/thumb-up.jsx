import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qo-lb0b8j.css';

const viewBox = {"width":472,"height":432};
const content = `<path class="qo-lb0b8j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:thumb-up"} {...others} />);
}

export default Component;
