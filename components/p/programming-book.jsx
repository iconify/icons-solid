import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x6p0rwuyx.css';
import '../../css/z/z1qy72b2q.css';
import '../../css/q/qksqq6bqw.css';
import '../../css/g/gvsfcabuw.css';
import '../../css/q/qv3grwykf.css';
import '../../css/k/k-qrcgbct.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="x6p0rwuyx"/><path class="z1qy72b2q"/><path class="qksqq6bqw"/><path class="gvsfcabuw"/><path class="qv3grwykf"/><path class="k-qrcgbct"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:programming-book"} {...others} />);
}

export default Component;
