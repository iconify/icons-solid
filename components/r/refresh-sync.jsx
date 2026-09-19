import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ivh42bn2r.css';

const viewBox = {"width":344,"height":480};
const content = `<path class="ivh42bn2r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:refresh-sync"} {...others} />);
}

export default Component;
