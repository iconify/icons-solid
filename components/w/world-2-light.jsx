import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/r/rb35__b2v.css';
import '../../css/p/p058992qq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="rb35__b2v"/><circle class="p058992qq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:world-2-light"} {...others} />);
}

export default Component;
