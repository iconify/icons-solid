import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r857p_fnh.css';
import '../../css/g/g757y11st.css';
import '../../css/o/o4qapjxgu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="r857p_fnh"/><path class="g757y11st"/><path class="o4qapjxgu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:brifecase-cross-filled"} {...others} />);
}

export default Component;
