import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lgqtkp22k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lgqtkp22k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:location-pin-check-filled"} {...others} />);
}

export default Component;
