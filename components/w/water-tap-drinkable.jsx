import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vfzq4k5vo.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="vfzq4k5vo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:water-tap-drinkable"} {...others} />);
}

export default Component;
