import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gjm9rv0gq.css';
import '../../css/e/etsx7fu9r.css';
import '../../css/f/fzhcv43_c.css';
import '../../css/r/r4qmh52-t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="gjm9rv0gq"/><path class="etsx7fu9r"/><path class="fzhcv43_c"/><path class="r4qmh52-t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:scissors"} {...others} />);
}

export default Component;
