import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j08vyhzaj.css';
import '../../css/l/l531-vi_a.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="j08vyhzaj"/><path class="l531-vi_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cloud-download-outline"} {...others} />);
}

export default Component;
