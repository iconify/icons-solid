import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/s/sev2ulxrd.css';
import '../../css/b/btzqzab2f.css';
import '../../css/q/qnx5uabzy.css';
import '../../css/y/yjz-s-8va.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="sev2ulxrd"/><path class="btzqzab2f"/><path class="qnx5uabzy"/><path class="yjz-s-8va"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:cactus"} {...others} />);
}

export default Component;
