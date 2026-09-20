import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/s/sl_3r4agh.css';
import '../../css/r/r2juzqsgu.css';
import '../../css/h/ha3xd_bqt.css';

const viewBox = {"width":64,"height":64};
const content = `<g class="bi12bsetm"><rect class="sl_3r4agh"/><circle class="r2juzqsgu"/><path class="ha3xd_bqt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:plainsignal"} {...others} />);
}

export default Component;
