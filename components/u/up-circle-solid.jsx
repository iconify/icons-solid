import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/srui7osvy.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="srui7osvy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:up-circle-solid"} {...others} />);
}

export default Component;
