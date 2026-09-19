import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e9b7z7bdy.css';

const viewBox = {"width":384,"height":512};
const content = `<path class="e9b7z7bdy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:mobile-screen-button"} {...others} />);
}

export default Component;
