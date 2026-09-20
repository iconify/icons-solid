import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hdhauyk9x.css';
import '../../css/z/z_y9kgv8h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hdhauyk9x"/><path clip-rule="evenodd" class="z_y9kgv8h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:fork-spoon-fill"} {...others} />);
}

export default Component;
