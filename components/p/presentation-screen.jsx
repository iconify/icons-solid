import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/ollz-969b.css';
import '../../css/j/jj1scnbfm.css';
import '../../css/s/st5yxik0w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ollz-969b"/><rect class="jj1scnbfm"/><path class="st5yxik0w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:presentation-screen"} {...others} />);
}

export default Component;
