import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/b/blwnmgb8p.css';
import '../../css/p/p791a-b5x.css';
import '../../css/e/ekhzbdo6v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><circle class="blwnmgb8p"/><path class="p791a-b5x"/><path class="ekhzbdo6v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:gongfu"} {...others} />);
}

export default Component;
