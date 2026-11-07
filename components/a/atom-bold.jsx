import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pgf30peyq.css';
import '../../css/e/eu6bk7lod.css';
import '../../css/b/btbtqzcge.css';
import '../../css/g/gdcy3bb_i.css';
import '../../css/x/x75w38bta.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pgf30peyq"/><path clip-rule="evenodd" class="eu6bk7lod"/><path class="btbtqzcge"/><path class="gdcy3bb_i"/><path class="x75w38bta"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:atom-bold"} {...others} />);
}

export default Component;
