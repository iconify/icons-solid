import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/phlg5e-oi.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="phlg5e-oi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:irc-galleria-logo-solid"} {...others} />);
}

export default Component;
