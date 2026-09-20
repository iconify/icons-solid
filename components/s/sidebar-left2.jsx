import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/v2gztr96w.css';
import '../../css/q/qa8z8ybpb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="v2gztr96w"/><path class="qa8z8ybpb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:sidebar-left2"} {...others} />);
}

export default Component;
