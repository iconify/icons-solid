import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dq3sqqqnr.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="dq3sqqqnr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:car-solid"} {...others} />);
}

export default Component;
