import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w-4u7ug5e.css';
import '../../css/s/smcj90bil.css';
import '../../css/l/lhdusj-en.css';
import '../../css/u/upbsbhbwv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="w-4u7ug5e"/><path class="smcj90bil"/><path class="lhdusj-en"/><path class="upbsbhbwv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:medical-specialty-nose"} {...others} />);
}

export default Component;
