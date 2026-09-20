import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/y/yw358mt-u.css';
import '../../css/p/pq1v23z4w.css';
import '../../css/c/cguy5pnci.css';
import '../../css/p/pg91jeirf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="yw358mt-u"/><path class="pq1v23z4w"/><path class="cguy5pnci"/><path class="pg91jeirf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:text-box-1"} {...others} />);
}

export default Component;
