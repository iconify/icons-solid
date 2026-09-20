import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qloeeh4pd.css';
import '../../css/u/uffa5mm_q.css';
import '../../css/g/gxi7eo-2j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="qloeeh4pd"><path class="uffa5mm_q"/><path class="gxi7eo-2j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:sound-recognition-search"} {...others} />);
}

export default Component;
