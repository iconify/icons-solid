import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z3lrykvii.css';
import '../../css/b/bh1jccc8w.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="z3lrykvii"/><path class="bh1jccc8w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:logo-app-store"} {...others} />);
}

export default Component;
