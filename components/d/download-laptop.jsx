import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/c/cijuohg6g.css';
import '../../css/u/ue0lmc99t.css';
import '../../css/w/w_w_fwp3f.css';
import '../../css/o/ods9vbcvp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="cijuohg6g"/><path class="ue0lmc99t"/><path class="w_w_fwp3f"/><path class="ods9vbcvp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:download-laptop"} {...others} />);
}

export default Component;
