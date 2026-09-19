import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/infxvtblb.css';

const viewBox = {"width":344,"height":384};
const content = `<path class="infxvtblb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:format-valign-top"} {...others} />);
}

export default Component;
