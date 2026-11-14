import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/e/eif_5fngc.css';
import '../../css/y/yw2fz4bys.css';
import '../../css/o/obupwye0b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><rect class="eif_5fngc"/><path class="yw2fz4bys"/><path class="obupwye0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:server"} {...others} />);
}

export default Component;
