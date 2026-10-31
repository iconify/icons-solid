import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g3cnu_1pa.css';
import '../../css/c/c9w7o3b2o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="g3cnu_1pa wm-k"/><path class="c9w7o3b2o wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:link-2-gloss"} {...others} />);
}

export default Component;
