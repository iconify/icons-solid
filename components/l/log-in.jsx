import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jq1dzob7h.css';
import '../../css/r/r811kzb8q.css';
import '../../css/a/a9_x0fs_r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jq1dzob7h wm-k"/><path class="r811kzb8q wm-a"/><path class="a9_x0fs_r wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:log-in"} {...others} />);
}

export default Component;
