import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/ljz2zm3wc.css';
import '../../css/s/sh71p8ypq.css';
import '../../css/p/pr7acponx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ljz2zm3wc"/><path class="sh71p8ypq"/><path clip-rule="evenodd" class="pr7acponx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:database-server-2-flat"} {...others} />);
}

export default Component;
