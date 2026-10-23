import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/k/kzpcc0vow.css';
import '../../css/z/zizg4l5-q.css';
import '../../css/a/apxy6bb8a.css';
import '../../css/l/lx7g7ftfv.css';
import '../../css/f/f85w2xglb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="kzpcc0vow"/><path class="zizg4l5-q"/><path class="apxy6bb8a"/><path class="lx7g7ftfv"/><path class="f85w2xglb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:trophy"} {...others} />);
}

export default Component;
