import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tx5zfftik.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tx5zfftik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:perspective-dice-six-faces-three"} {...others} />);
}

export default Component;
