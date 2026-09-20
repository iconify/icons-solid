import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/sbp7-fiha.css';
import '../../css/k/kfq_4gvdz.css';
import '../../css/d/d2qfxh10l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="sbp7-fiha"/><path class="kfq_4gvdz"/><path class="d2qfxh10l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:labor-hands-action"} {...others} />);
}

export default Component;
