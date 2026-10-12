import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aap0qvl0c.css';
import '../../css/i/ia275-bew.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="aap0qvl0c"/><path class="ia275-bew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:monitor-pc-filled"} {...others} />);
}

export default Component;
