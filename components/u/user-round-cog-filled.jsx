import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/auxij4h6f.css';
import '../../css/b/b_q949lvw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="auxij4h6f"/><path class="b_q949lvw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:user-round-cog-filled"} {...others} />);
}

export default Component;
