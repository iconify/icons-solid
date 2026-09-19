import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/e/ehssdsxzo.css';
import '../../css/p/plakrxbhx.css';
import '../../css/a/ahdaw7x5b.css';
import '../../css/z/z7e_plawd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="ehssdsxzo"/><path class="plakrxbhx"/><path class="ahdaw7x5b"/><path class="z7e_plawd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:game"} {...others} />);
}

export default Component;
