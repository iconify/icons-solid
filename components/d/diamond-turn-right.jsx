import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tb2keo2id.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tb2keo2id"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:diamond-turn-right"} {...others} />);
}

export default Component;
