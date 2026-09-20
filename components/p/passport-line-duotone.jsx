import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rap11obza.css';
import '../../css/a/ax3lz4b9z.css';
import '../../css/g/ga7t0girt.css';
import '../../css/e/ef0vyen_w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="rap11obza"/><circle class="ax3lz4b9z"/><path class="ga7t0girt"/><path class="ef0vyen_w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:passport-line-duotone"} {...others} />);
}

export default Component;
