import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qhog3w6ld.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qhog3w6ld"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:google-talk-logo-block"} {...others} />);
}

export default Component;
