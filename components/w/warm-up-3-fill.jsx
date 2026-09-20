import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eevgm_byn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eevgm_byn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:warm-up-3-fill"} {...others} />);
}

export default Component;
