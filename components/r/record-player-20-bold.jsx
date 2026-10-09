import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eiqvwlcfe.css';
import '../../css/v/v11i6u_5o.css';
import '../../css/t/ty83n9sfq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="eiqvwlcfe"/><path class="v11i6u_5o"/><path class="ty83n9sfq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:record-player-20-bold"} {...others} />);
}

export default Component;
