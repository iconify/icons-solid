import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h15ryn7dx.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="h15ryn7dx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:pound-solid"} {...others} />);
}

export default Component;
