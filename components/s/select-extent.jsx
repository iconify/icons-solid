import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vhwv4f-bz.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="vhwv4f-bz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:select-extent"} {...others} />);
}

export default Component;
