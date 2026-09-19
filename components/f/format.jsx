import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/t/trmtdujop.css';
import '../../css/y/y718yy4vc.css';
import '../../css/d/duqim2bva.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><rect class="trmtdujop"/><path class="y718yy4vc"/><path class="duqim2bva"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:format"} {...others} />);
}

export default Component;
