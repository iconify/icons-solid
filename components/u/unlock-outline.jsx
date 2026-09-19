import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/s/sh_6mzbig.css';
import '../../css/o/o51z98v9d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><rect class="sh_6mzbig"/><path class="o51z98v9d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:unlock-outline"} {...others} />);
}

export default Component;
