import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/amn-swbyv.css';
import '../../css/k/k-5wtep8z.css';
import '../../css/z/z6_73rb1p.css';
import '../../css/e/eds0rocpp.css';
import '../../css/l/l9193mbcw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="amn-swbyv wm-shadow"/><path class="k-5wtep8z wm-shadow"/><path class="z6_73rb1p"/><path class="eds0rocpp"/><path class="l9193mbcw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:telescope"} {...others} />);
}

export default Component;
