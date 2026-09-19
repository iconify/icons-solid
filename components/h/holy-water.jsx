import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uh5t2xsar.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="uh5t2xsar"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:holy-water"} {...others} />);
}

export default Component;
