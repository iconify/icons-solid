import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/s/svaa2ob7z.css';
import '../../css/y/yzjq06bkq.css';
import '../../css/n/np9bfzb7v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="svaa2ob7z"/><path class="yzjq06bkq"/><path class="np9bfzb7v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:eggplant"} {...others} />);
}

export default Component;
