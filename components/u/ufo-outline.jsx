import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j6-2od-ft.css';
import '../../css/k/kb3qv9b3z.css';
import '../../css/z/zkdww2byo.css';
import '../../css/x/xu5i9lf5g.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="j6-2od-ft"/><path class="kb3qv9b3z"/><path class="zkdww2byo"/><path class="xu5i9lf5g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ufo-outline"} {...others} />);
}

export default Component;
