import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mthpz1b_c.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="mthpz1b_c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:triangle-left"} {...others} />);
}

export default Component;
