import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/grhpkv0pg.css';
import '../../css/f/fc-vduj0h.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="grhpkv0pg"/><path class="fc-vduj0h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:building-stroke-20"} {...others} />);
}

export default Component;
