import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fp8oo_bbm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fp8oo_bbm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:sunset-filled"} {...others} />);
}

export default Component;
