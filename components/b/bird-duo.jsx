import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/voep8qsle.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wqf7p-_1n.css';
import '../../css/m/md_cc_yxf.css';
import '../../css/v/vgww05bik.css';
import '../../css/s/sxktg47-o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary voep8qsle"/><g class="dt0cm9dhy primary"><path class="wqf7p-_1n"/><path class="md_cc_yxf"/><path class="vgww05bik"/><path class="sxktg47-o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:bird-duo"} {...others} />);
}

export default Component;
