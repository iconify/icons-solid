import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lahawovus.css';
import '../../css/c/c7gy7_bak.css';
import '../../css/q/qtkg0dbft.css';
import '../../css/s/sridkpbug.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="lahawovus"/><path clip-rule="evenodd" class="c7gy7_bak"/><path class="qtkg0dbft"/><path class="sridkpbug"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:politics-vote-2"} {...others} />);
}

export default Component;
