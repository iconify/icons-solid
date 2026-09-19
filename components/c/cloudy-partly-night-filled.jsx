import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b-8kybbep.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="b-8kybbep"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:cloudy-partly-night-filled"} {...others} />);
}

export default Component;
