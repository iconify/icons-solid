import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u9ooe_rjk.css';
import '../../css/l/ld8afubkm.css';
import '../../css/n/n1ueciogc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="u9ooe_rjk"/><path class="ld8afubkm"/><path clip-rule="evenodd" class="n1ueciogc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:passport-outline"} {...others} />);
}

export default Component;
