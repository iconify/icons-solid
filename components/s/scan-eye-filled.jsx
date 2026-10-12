import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qq6vezb0v.css';
import '../../css/z/z_t71ccqt.css';
import '../../css/l/ltats8egd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qq6vezb0v"/><path clip-rule="evenodd" class="z_t71ccqt"/><path class="ltats8egd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:scan-eye-filled"} {...others} />);
}

export default Component;
