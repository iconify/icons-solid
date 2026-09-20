import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/abdm64bot.css';
import '../../css/h/h7xzrib4t.css';
import '../../css/a/arhdvhtkj.css';
import '../../css/b/b0yqitbma.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="abdm64bot"/><path class="h7xzrib4t"/><path class="arhdvhtkj"/><path clip-rule="evenodd" class="b0yqitbma"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cat-outline"} {...others} />);
}

export default Component;
