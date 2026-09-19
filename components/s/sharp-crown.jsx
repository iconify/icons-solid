import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cewjf_06r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cewjf_06r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:sharp-crown"} {...others} />);
}

export default Component;
