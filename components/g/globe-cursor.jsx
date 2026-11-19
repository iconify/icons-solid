import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j-za1hb4x.css';
import '../../css/u/u5h8llb9a.css';
import '../../css/n/n9yopmb_r.css';
import '../../css/h/hch4jfbgb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="j-za1hb4x"/><path class="u5h8llb9a"/><path class="n9yopmb_r"/><path class="hch4jfbgb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:globe-cursor"} {...others} />);
}

export default Component;
