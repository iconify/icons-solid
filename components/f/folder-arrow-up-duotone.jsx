import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tcxiwh5fp.css';
import '../../css/l/lyx9rne7u.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="tcxiwh5fp"/><path class="lyx9rne7u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:folder-arrow-up-duotone"} {...others} />);
}

export default Component;
