import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/l/ls8s3cc1i.css';
import '../../css/b/bi881ebwa.css';
import '../../css/d/dz804iovd.css';
import '../../css/i/i1lm50b5r.css';
import '../../css/w/w7cjp73rt.css';
import '../../css/s/sfath8blt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="ls8s3cc1i"/><path class="bi881ebwa"/><path class="dz804iovd"/><path class="i1lm50b5r"/><path class="w7cjp73rt"/><path class="sfath8blt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:orange-one"} {...others} />);
}

export default Component;
