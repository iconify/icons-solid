import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lvw6up7ga.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lvw6up7ga"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:logo-game-controller-a"} {...others} />);
}

export default Component;
