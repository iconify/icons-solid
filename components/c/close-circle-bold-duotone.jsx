import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mpv5vhdla.css';
import '../../css/a/ak4la_gud.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mpv5vhdla"/><path class="ak4la_gud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:close-circle-bold-duotone"} {...others} />);
}

export default Component;
