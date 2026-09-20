import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lofrdjd_e.css';

const viewBox = {"width":360,"height":362};
const content = `<path clip-rule="evenodd" class="lofrdjd_e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:whatsapp"} {...others} />);
}

export default Component;
