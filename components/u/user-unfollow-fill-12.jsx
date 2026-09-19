import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m23wrpw-d.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="m23wrpw-d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:user-unfollow-fill-12"} {...others} />);
}

export default Component;
