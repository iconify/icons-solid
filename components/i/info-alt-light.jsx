import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/n/n27hwib_u.css';
import '../../css/d/dtnj1ib4f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="n27hwib_u"/><path class="dtnj1ib4f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:info-alt-light"} {...others} />);
}

export default Component;
