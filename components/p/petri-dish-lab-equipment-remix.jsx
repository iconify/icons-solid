import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zibuxdi7c.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="zibuxdi7c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:petri-dish-lab-equipment-remix"} {...others} />);
}

export default Component;
