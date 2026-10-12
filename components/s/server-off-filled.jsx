import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tx0z78bot.css';
import '../../css/t/tdaucbcdb.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="tx0z78bot"/><path class="tdaucbcdb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:server-off-filled"} {...others} />);
}

export default Component;
