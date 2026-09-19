import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/z/z2qxq_b6e.css';
import '../../css/h/h7rw0qb7p.css';
import '../../css/y/ymv5tjb5q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="z2qxq_b6e"/><path class="h7rw0qb7p"/><path class="ymv5tjb5q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:exclusive-gateway"} {...others} />);
}

export default Component;
