import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/li1w34b2h.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="li1w34b2h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:phone-rotate-mobile-solid"} {...others} />);
}

export default Component;
