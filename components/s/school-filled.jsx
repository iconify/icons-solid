import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x0otgbc0o.css';
import '../../css/q/q5ffr0-sa.css';
import '../../css/t/tsmhkwu9x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x0otgbc0o"/><path clip-rule="evenodd" class="q5ffr0-sa"/><path class="tsmhkwu9x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:school-filled"} {...others} />);
}

export default Component;
