import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/t/t-lmtqbvy.css';
import '../../css/c/czwtscbxu.css';
import '../../css/f/fz7nbcc5u.css';
import '../../css/x/x2v1nbbxv.css';
import '../../css/m/m4vdscbwk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="t-lmtqbvy"/><path class="czwtscbxu"/><path class="fz7nbcc5u"/><path class="x2v1nbbxv"/><path class="m4vdscbwk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:mail-review"} {...others} />);
}

export default Component;
