import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g5z6obdrt.css';
import '../../css/z/zm_ki8omw.css';
import '../../css/g/g9xmp3kch.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="g5z6obdrt"/><path clip-rule="evenodd" class="zm_ki8omw"/><path class="g9xmp3kch"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:pill"} {...others} />);
}

export default Component;
