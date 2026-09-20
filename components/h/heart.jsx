import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vusr4-bku.css';
import '../../css/l/lciua-biv.css';
import '../../css/u/ur3frsohe.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/w/wnmb49b9x.css';
import '../../css/x/x3oc4j8vn.css';
import '../../css/x/xwcno45si.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="vusr4-bku"/><path class="lciua-biv"/><path class="ur3frsohe"/><g class="jn8qy4bru"><path class="wnmb49b9x"/><path class="x3oc4j8vn"/><path class="xwcno45si"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:heart"} {...others} />);
}

export default Component;
