import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t6a0ktsjd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t6a0ktsjd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:location-pin-filled"} {...others} />);
}

export default Component;
