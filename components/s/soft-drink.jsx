import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u9r_f26yz.css';
import '../../css/a/a4fa86ant.css';
import '../../css/h/h55fdbcqv.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="u9r_f26yz"/><path class="a4fa86ant"/><path class="h55fdbcqv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:soft-drink"} {...others} />);
}

export default Component;
