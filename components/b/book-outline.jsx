import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/igsunmbzv.css';
import '../../css/a/a9fj4vpqc.css';
import '../../css/u/u1026qbii.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="igsunmbzv"/><path class="a9fj4vpqc"/><path clip-rule="evenodd" class="u1026qbii"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:book-outline"} {...others} />);
}

export default Component;
