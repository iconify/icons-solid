import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/co0vf9bvy.css';
import '../../css/e/ec1om73-a.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="co0vf9bvy"/><path class="ec1om73-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:induction-hob-20"} {...others} />);
}

export default Component;
