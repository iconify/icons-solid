import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h7r03-bxr.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="h7r03-bxr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:layers-intersect-solid"} {...others} />);
}

export default Component;
