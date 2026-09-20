import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mcr02fcny.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="mcr02fcny"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:open-umbrella"} {...others} />);
}

export default Component;
