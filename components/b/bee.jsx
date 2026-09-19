import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/u/ujlqtjraf.css';
import '../../css/b/b7xcik0eh.css';
import '../../css/i/i499bq7-i.css';
import '../../css/d/dyisvyq3k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="ujlqtjraf"/><path class="b7xcik0eh"/><rect class="i499bq7-i"/><path class="dyisvyq3k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:bee"} {...others} />);
}

export default Component;
