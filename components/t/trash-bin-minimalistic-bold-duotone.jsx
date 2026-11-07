import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jwm94h7db.css';
import '../../css/p/pmxdqdbac.css';
import '../../css/p/p78phac9m.css';
import '../../css/q/q9c6evmhl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jwm94h7db"/><path class="pmxdqdbac"/><path class="p78phac9m"/><path class="q9c6evmhl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:trash-bin-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
