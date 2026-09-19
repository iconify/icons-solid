import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g9ojsnb7p.css';
import '../../css/f/fkvrrkbqg.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="g9ojsnb7p"/><path class="fkvrrkbqg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:compass"} {...others} />);
}

export default Component;
