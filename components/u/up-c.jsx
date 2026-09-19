import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/g/gz8--lx8p.css';
import '../../css/m/mz340mupd.css';
import '../../css/y/yrx40bbij.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path clip-rule="evenodd" class="gz8--lx8p"/><path class="mz340mupd"/><path class="yrx40bbij"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:up-c"} {...others} />);
}

export default Component;
