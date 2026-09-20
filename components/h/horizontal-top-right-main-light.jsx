import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mu0vt1yam.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mu0vt1yam"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:horizontal-top-right-main-light"} {...others} />);
}

export default Component;
