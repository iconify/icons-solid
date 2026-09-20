import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/h/hgce2bydp.css';
import '../../css/p/puqx3wb1e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="hgce2bydp"/><path class="puqx3wb1e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:speaker4"} {...others} />);
}

export default Component;
