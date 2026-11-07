import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yu1bol9do.css';
import '../../css/c/crtuvabgp.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="yu1bol9do"/><path class="crtuvabgp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:align-vertical-spacing-bold-duotone"} {...others} />);
}

export default Component;
