import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t--xytb9r.css';
import '../../css/c/clx0kobhk.css';
import '../../css/z/zsa96hgjp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="t--xytb9r"/><rect class="clx0kobhk"/><path class="zsa96hgjp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:container"} {...others} />);
}

export default Component;
