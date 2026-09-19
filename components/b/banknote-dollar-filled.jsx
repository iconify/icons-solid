import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h34m3h0js.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h34m3h0js"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:banknote-dollar-filled"} {...others} />);
}

export default Component;
