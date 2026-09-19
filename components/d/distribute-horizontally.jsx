import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/q/q6g5cubep.css';
import '../../css/w/w2_-20bdu.css';
import '../../css/d/dhve7w4yl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><rect transform="rotate(90 30 10)" class="q6g5cubep"/><path class="w2_-20bdu"/><path class="dhve7w4yl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:distribute-horizontally"} {...others} />);
}

export default Component;
