import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wo16r8ief.css';
import '../../css/g/gcs8t4brs.css';
import '../../css/b/b2o1pwbes.css';
import '../../css/y/ywo8pdqxt.css';
import '../../css/p/p93mmtu1a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="wo16r8ief"/><path clip-rule="evenodd" class="gcs8t4brs"/><path class="b2o1pwbes"/><path class="ywo8pdqxt"/><path class="p93mmtu1a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cup-hot-bold"} {...others} />);
}

export default Component;
