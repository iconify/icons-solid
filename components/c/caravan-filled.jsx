import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qpcj9efqn.css';
import '../../css/s/s9lr0vb6p.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qpcj9efqn"/><path class="s9lr0vb6p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:caravan-filled"} {...others} />);
}

export default Component;
