import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gx5-5bc-d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gx5-5bc-d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:diplodocus"} {...others} />);
}

export default Component;
