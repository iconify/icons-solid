import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x5cvq3b4h.css';
import '../../css/i/iv92ody-l.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="x5cvq3b4h"/><path class="iv92ody-l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:bug-off-filled"} {...others} />);
}

export default Component;
