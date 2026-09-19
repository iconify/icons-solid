import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z62-w0m7e.css';
import '../../css/l/l47wg2bol.css';
import '../../css/m/mubrohbof.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z62-w0m7e"/><path class="l47wg2bol"/><path class="mubrohbof"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:rainbow-filled"} {...others} />);
}

export default Component;
