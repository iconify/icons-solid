import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/r/r8m1a9bnl.css';
import '../../css/t/tkkn2dmyr.css';
import '../../css/u/uf9udxo6b.css';
import '../../css/c/cgu1-bc6z.css';

const viewBox = {"width":48,"height":48};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="r8m1a9bnl"/><path class="tkkn2dmyr"/><path class="uf9udxo6b"/><path class="cgu1-bc6z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:global-warming-2-flat"} {...others} />);
}

export default Component;
