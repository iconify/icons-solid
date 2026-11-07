import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ctu7he3ei.css';
import '../../css/m/mrqs5-_hf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ctu7he3ei"/><path class="mrqs5-_hf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rewind-forward-bold-duotone"} {...others} />);
}

export default Component;
