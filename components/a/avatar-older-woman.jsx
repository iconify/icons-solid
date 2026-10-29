import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/c1bj_oogc.css';
import '../../css/h/h83iiqbba.css';
import '../../css/s/sn07vob-o.css';
import '../../css/b/b0ibfacrl.css';
import '../../css/g/gaky12syl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="c1bj_oogc"/><path class="h83iiqbba"/><path class="sn07vob-o"/><path class="b0ibfacrl"/><path class="gaky12syl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:avatar-older-woman"} {...others} />);
}

export default Component;
