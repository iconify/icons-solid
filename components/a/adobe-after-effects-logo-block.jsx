import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zpxl7f8fi.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="zpxl7f8fi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:adobe-after-effects-logo-block"} {...others} />);
}

export default Component;
