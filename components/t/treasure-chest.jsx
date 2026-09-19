import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/d/ddf6u7zwo.css';
import '../../css/z/z_ff3xb_k.css';
import '../../css/y/y7qltbgbx.css';
import '../../css/g/goapajb2k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="ddf6u7zwo"/><path class="z_ff3xb_k"/><path class="y7qltbgbx"/><path class="goapajb2k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:treasure-chest"} {...others} />);
}

export default Component;
