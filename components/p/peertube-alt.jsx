import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/km11tn.css';
import '../../css/y/ydovum.css';
import '../../css/j/jerajh.css';
import '../../css/b/bqezkf.css';
import '../../css/d/d-y0k17z.css';
import '../../css/d/d-eo5vsf.css';
import '../../css/d/d-hy4_ez.css';
import '../../css/d/d-zqf0qv.css';
import '../../css/d/d-h1s04y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="km11tn ydovum"/><path class="jerajh ydovum"/><path class="bqezkf ydovum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:peertube-alt"} {...others} />);
}

export default Component;
