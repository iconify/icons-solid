import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jgkfl6b7g.css';
import '../../css/t/t2vwib_3k.css';
import '../../css/z/zka-lh4oe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jgkfl6b7g"/><path clip-rule="evenodd" class="t2vwib_3k"/><path class="zka-lh4oe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:timer-off-filled"} {...others} />);
}

export default Component;
