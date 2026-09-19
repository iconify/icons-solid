import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m0ojfxbrx.css';
import '../../css/a/akenjqb-m.css';
import '../../css/a/a7ah0vuxn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="m0ojfxbrx"/><path class="akenjqb-m"/><path class="a7ah0vuxn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:gamedie"} {...others} />);
}

export default Component;
