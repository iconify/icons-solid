import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/n/ncmhkr_hu.css';
import '../../css/c/crvzepbgn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="ncmhkr_hu"/><path class="crvzepbgn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:user-single-neutral-male"} {...others} />);
}

export default Component;
