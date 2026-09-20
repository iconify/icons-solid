import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vdd5i1b8m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vdd5i1b8m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:rivet"} {...others} />);
}

export default Component;
