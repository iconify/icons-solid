import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v40qs34fv.css';
import '../../css/a/avlbzl6tg.css';
import '../../css/n/nu63srbet.css';
import '../../css/c/c97rv7b9j.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="v40qs34fv"/><path class="avlbzl6tg"/><path class="nu63srbet"/><path class="c97rv7b9j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:ice-cream-2"} {...others} />);
}

export default Component;
