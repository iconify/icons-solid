import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sefj0onvx.css';
import '../../css/j/j5chjyltn.css';
import '../../css/c/c8rlrik4k.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="sefj0onvx"/><path clip-rule="evenodd" class="j5chjyltn"/><path class="c8rlrik4k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:database-refresh-flat"} {...others} />);
}

export default Component;
