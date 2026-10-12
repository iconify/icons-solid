import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/mj08_6n_e.css';
import '../../css/d/dzb3u1bap.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="mj08_6n_e"/><path class="dzb3u1bap"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:arrow-corner-down-left"} {...others} />);
}

export default Component;
