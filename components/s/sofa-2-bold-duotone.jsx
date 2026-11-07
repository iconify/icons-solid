import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ay8lzabxd.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/t/thqt1dbyk.css';
import '../../css/l/lot9ypbnj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ay8lzabxd"/><g class="xtpeb-edw"><path class="thqt1dbyk"/><path class="lot9ypbnj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sofa-2-bold-duotone"} {...others} />);
}

export default Component;
