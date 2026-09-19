import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rlgjnndhs.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rlgjnndhs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:location-pin-cancel"} {...others} />);
}

export default Component;
