import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r4-qyw_pz.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="r4-qyw_pz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:spiky-fish-under-water"} {...others} />);
}

export default Component;
