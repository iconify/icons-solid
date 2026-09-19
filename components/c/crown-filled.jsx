import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/daw-8pbwf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="daw-8pbwf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:crown-filled"} {...others} />);
}

export default Component;
