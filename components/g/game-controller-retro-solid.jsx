import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/frs8--b9a.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="frs8--b9a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:game-controller-retro-solid"} {...others} />);
}

export default Component;
