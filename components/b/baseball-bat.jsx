import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ly6jl_bkj.css';
import '../../css/z/zrcrh4bnb.css';
import '../../css/j/j0-a04gjv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ly6jl_bkj"><circle class="zrcrh4bnb"/><path class="j0-a04gjv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:baseball-bat"} {...others} />);
}

export default Component;
