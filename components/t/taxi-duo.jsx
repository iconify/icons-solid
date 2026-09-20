import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/thjuvbz3w.css';
import '../../css/b/bomrg4edb.css';
import '../../css/o/ovwzzpbbb.css';
import '../../css/g/gb9hqxvkr.css';
import '../../css/u/u6n2yk8wc.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="thjuvbz3w"><path class="bomrg4edb"/><path class="ovwzzpbbb"/><path class="gb9hqxvkr"/><path class="u6n2yk8wc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:taxi-duo"} {...others} />);
}

export default Component;
