import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/b/b8cd-f9hp.css';
import '../../css/r/r__fs9qdv.css';
import '../../css/d/d8x3xzbpj.css';
import '../../css/q/q5iwxve0v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="b8cd-f9hp"/><path class="r__fs9qdv"/><path class="d8x3xzbpj"/><path class="q5iwxve0v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:branch-one"} {...others} />);
}

export default Component;
