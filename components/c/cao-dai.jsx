import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/h/hgs3xdj9a.css';
import '../../css/u/u2r651b9t.css';
import '../../css/s/sr9f-eb9q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="hgs3xdj9a"/><path class="u2r651b9t"/><path class="sr9f-eb9q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:cao-dai"} {...others} />);
}

export default Component;
