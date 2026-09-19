import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/g/ge5j9_5vp.css';
import '../../css/v/vuuu3ls-z.css';
import '../../css/p/pjqmx8b7g.css';
import '../../css/r/rqcacxbll.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="ge5j9_5vp"/><path clip-rule="evenodd" class="vuuu3ls-z"/><path class="pjqmx8b7g"/><path class="rqcacxbll"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:globe"} {...others} />);
}

export default Component;
