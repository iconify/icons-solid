import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vw2nn3blf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vw2nn3blf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:vrsw"} {...others} />);
}

export default Component;
