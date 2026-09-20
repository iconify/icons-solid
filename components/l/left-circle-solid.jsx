import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z16gh80jm.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="z16gh80jm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:left-circle-solid"} {...others} />);
}

export default Component;
