import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/g1ytquk1o.css';
import '../../css/u/u4_5nh98c.css';
import '../../css/i/itstwccjg.css';
import '../../css/r/rqq5urb9u.css';
import '../../css/d/damlddb8q.css';
import '../../css/l/lrcyu4bmm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="g1ytquk1o wm-shadow"/><path class="u4_5nh98c"/><path class="itstwccjg"/><path class="rqq5urb9u"/><path class="damlddb8q"/><path class="lrcyu4bmm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:dental-chair"} {...others} />);
}

export default Component;
