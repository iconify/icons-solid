import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p5cnlljnt.css';
import '../../css/v/vp7qox-bo.css';
import '../../css/d/dloivj_8k.css';
import '../../css/u/urrjas0at.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="p5cnlljnt"/><path class="vp7qox-bo"/><path class="dloivj_8k"/><path class="urrjas0at"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-global-public"} {...others} />);
}

export default Component;
