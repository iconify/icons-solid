import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d29v6d4xo.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/j/j0tyonbdw.css';
import '../../css/k/k0d7q8bwx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="d29v6d4xo"/><g class="xtpeb-edw"><path class="j0tyonbdw"/><path class="k0d7q8bwx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:documents-bold-duotone"} {...others} />);
}

export default Component;
