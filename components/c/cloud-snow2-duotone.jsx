import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pgtxoq_7g.css';
import '../../css/s/shlncrbqa.css';
import '../../css/q/qahh7jj6e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="pgtxoq_7g"/><path class="shlncrbqa"/><path class="qahh7jj6e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:cloud-snow2-duotone"} {...others} />);
}

export default Component;
