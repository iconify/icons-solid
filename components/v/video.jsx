import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hqd8fcboz.css';
import '../../css/d/dzr6cgbld.css';
import '../../css/p/pg7ja1biu.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="hqd8fcboz"><path class="dzr6cgbld"/><path class="pg7ja1biu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gala:video"} {...others} />);
}

export default Component;
