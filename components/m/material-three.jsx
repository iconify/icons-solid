import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/azue8pydx.css';
import '../../css/l/lzncdxb9m.css';
import '../../css/f/fv2nt412f.css';
import '../../css/c/chplzrn1f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="azue8pydx"/><path class="lzncdxb9m"/><path clip-rule="evenodd" class="fv2nt412f"/><path class="chplzrn1f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:material-three"} {...others} />);
}

export default Component;
