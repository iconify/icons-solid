import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a6btkpb1k.css';
import '../../css/m/m9p18tack.css';
import '../../css/i/ifc6tcces.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="a6btkpb1k"/><path class="m9p18tack"/><path class="ifc6tcces"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-doc"} {...others} />);
}

export default Component;
