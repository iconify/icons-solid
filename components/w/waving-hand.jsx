import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/c/c-xwwyb7z.css';
import '../../css/z/zp_4s8btr.css';
import '../../css/r/rm-s3cucg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="c-xwwyb7z"/><path class="zp_4s8btr"/><path class="rm-s3cucg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:waving-hand"} {...others} />);
}

export default Component;
