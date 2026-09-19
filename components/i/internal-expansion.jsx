import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/a/a1vsxixsf.css';
import '../../css/c/cra21lbdi.css';
import '../../css/d/d81yb6boo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="a1vsxixsf"/><path clip-rule="evenodd" class="cra21lbdi"/><path class="d81yb6boo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:internal-expansion"} {...others} />);
}

export default Component;
