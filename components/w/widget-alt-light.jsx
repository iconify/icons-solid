import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/v/vbf1v13kd.css';
import '../../css/g/g6f7wqbxw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><rect transform="matrix(1 0 0 -1 14 10)" class="vbf1v13kd"/><path class="g6f7wqbxw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:widget-alt-light"} {...others} />);
}

export default Component;
