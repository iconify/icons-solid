import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zm0the13b.css';
import '../../css/e/ehbqml5ic.css';
import '../../css/z/z4qfeoj9o.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><circle class="zm0the13b"/><circle class="ehbqml5ic"/><circle class="z4qfeoj9o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:dots-x"} {...others} />);
}

export default Component;
