import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fc0i6jz9j.css';
import '../../css/u/ujlvc1bor.css';
import '../../css/b/b5f5xnbyj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="fc0i6jz9j"/><path class="ujlvc1bor"/><path class="b5f5xnbyj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:contact-lenses"} {...others} />);
}

export default Component;
