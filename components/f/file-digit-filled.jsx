import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pkpsqzbwi.css';
import '../../css/s/si75a-bbq.css';
import '../../css/v/v1_beqnys.css';
import '../../css/l/l_fae7rzf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="pkpsqzbwi"/><path class="si75a-bbq"/><path class="v1_beqnys"/><path class="l_fae7rzf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:file-digit-filled"} {...others} />);
}

export default Component;
