import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c7sy6m7uh.css';
import '../../css/t/tegin3b-f.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="c7sy6m7uh"/><path class="tegin3b-f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:ear-off-filled"} {...others} />);
}

export default Component;
