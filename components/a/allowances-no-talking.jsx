import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p05jewdzj.css';
import '../../css/g/gjma2yb7x.css';
import '../../css/k/kg067x6tj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="p05jewdzj"/><path class="gjma2yb7x"/><path class="kg067x6tj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:allowances-no-talking"} {...others} />);
}

export default Component;
