import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eray_ub-o.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="eray_ub-o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:card-2-clubs"} {...others} />);
}

export default Component;
