import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t3kfvduxw.css';
import '../../css/z/zz986l7un.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="t3kfvduxw"/><path class="zz986l7un"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:apron"} {...others} />);
}

export default Component;
