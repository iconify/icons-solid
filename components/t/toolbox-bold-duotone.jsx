import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fg_fn_bfr.css';
import '../../css/z/z3e729uop.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="fg_fn_bfr"/><path class="z3e729uop"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:toolbox-bold-duotone"} {...others} />);
}

export default Component;
