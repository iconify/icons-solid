import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p8oqe4bzp.css';
import '../../css/d/d6ayr8b-k.css';
import '../../css/y/yea7jvb0a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="p8oqe4bzp"/><path class="d6ayr8b-k"/><path class="yea7jvb0a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:navigation-up-arrow"} {...others} />);
}

export default Component;
