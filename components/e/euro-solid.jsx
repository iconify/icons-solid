import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ogh1vxbqa.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="ogh1vxbqa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:euro-solid"} {...others} />);
}

export default Component;
