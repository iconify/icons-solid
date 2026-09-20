import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/y/y46gdktui.css';
import '../../css/r/rqlsr2bvh.css';
import '../../css/f/fc2zsxbxd.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="y46gdktui"/><path class="rqlsr2bvh"/><path class="fc2zsxbxd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:wireless-signal-rss-feed"} {...others} />);
}

export default Component;
