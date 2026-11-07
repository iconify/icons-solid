import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iv08lsi2x.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/f/f1k3q-bzm.css';
import '../../css/i/i6x-msbst.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="iv08lsi2x"/><g class="xtpeb-edw"><path class="f1k3q-bzm"/><path class="i6x-msbst"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-to-down-right-bold-duotone"} {...others} />);
}

export default Component;
