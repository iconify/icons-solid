import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/x/x3x5w2oyz.css';
import '../../css/u/up7zc7bxz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="x3x5w2oyz"/><path class="up7zc7bxz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:sort-up-alt"} {...others} />);
}

export default Component;
