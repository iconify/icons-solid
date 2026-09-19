import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ul-m_mdjs.css';
import '../../css/e/ea0acz-ju.css';
import '../../css/u/u6zkyfsky.css';
import '../../css/v/viuo68bqo.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ul-m_mdjs"/><path clip-rule="evenodd" class="ea0acz-ju"/><path class="u6zkyfsky"/><path class="viuo68bqo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:syringe-print"} {...others} />);
}

export default Component;
