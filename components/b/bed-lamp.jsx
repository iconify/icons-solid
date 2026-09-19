import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fko3yrtpi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fko3yrtpi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:bed-lamp"} {...others} />);
}

export default Component;
