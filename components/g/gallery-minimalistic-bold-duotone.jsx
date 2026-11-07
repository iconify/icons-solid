import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/leiavflem.css';
import '../../css/a/aumpujaom.css';
import '../../css/y/yv4_o-byj.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="leiavflem"/><path class="aumpujaom"/><path class="yv4_o-byj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:gallery-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
