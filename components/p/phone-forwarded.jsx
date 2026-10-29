import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/spnf93r-f.css';
import '../../css/x/xh76--bfd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="spnf93r-f"/><path class="wm-s xh76--bfd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:phone-forwarded"} {...others} />);
}

export default Component;
