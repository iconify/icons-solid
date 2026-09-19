import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xo01bq3gx.css';
import '../../css/h/hebxe4pns.css';
import '../../css/k/k2dqs591a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="xo01bq3gx"/><path clip-rule="evenodd" class="hebxe4pns"/><path class="k2dqs591a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:banknotes-solid"} {...others} />);
}

export default Component;
