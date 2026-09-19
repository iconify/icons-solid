import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mmt4rvbrq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mmt4rvbrq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:dinosaur-bones"} {...others} />);
}

export default Component;
