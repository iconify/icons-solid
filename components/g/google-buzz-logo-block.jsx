import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qv3r98bis.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qv3r98bis"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:google-buzz-logo-block"} {...others} />);
}

export default Component;
