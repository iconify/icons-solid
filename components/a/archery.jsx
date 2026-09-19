import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/x/x_5bsx01w.css';
import '../../css/c/clg9eiblv.css';
import '../../css/f/f47gc0bvj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="x_5bsx01w"/><circle class="clg9eiblv"/><path class="f47gc0bvj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:archery"} {...others} />);
}

export default Component;
