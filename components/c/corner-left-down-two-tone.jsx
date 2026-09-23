import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cxrv3d63f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cxrv3d63f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:corner-left-down-two-tone"} {...others} />);
}

export default Component;
