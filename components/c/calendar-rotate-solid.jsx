import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sqa3tkb1n.css';
import '../../css/r/r95-bgbku.css';
import '../../css/l/l6q22kb6g.css';
import '../../css/d/d29_0cc6t.css';
import '../../css/e/e0sda5bng.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="sqa3tkb1n"><path class="r95-bgbku"/><path class="l6q22kb6g"/><path class="d29_0cc6t"/><path class="e0sda5bng"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:calendar-rotate-solid"} {...others} />);
}

export default Component;
