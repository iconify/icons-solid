import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d35cr1bzu.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/uuphcfbpa.css';
import '../../css/s/s17gsfb4w.css';
import '../../css/y/y5sn-cbkf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d35cr1bzu secondary"/><g class="dt0cm9dhy primary"><path class="uuphcfbpa"/><path class="s17gsfb4w"/><path class="y5sn-cbkf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:book-copy-duo"} {...others} />);
}

export default Component;
