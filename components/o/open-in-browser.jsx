import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mum3xruae.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mum3xruae"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:open-in-browser"} {...others} />);
}

export default Component;
