import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z4jxu5czf.css';
import '../../css/f/fzx-cqyqn.css';
import '../../css/l/lbs6myb9c.css';
import '../../css/p/pl2gq7b0p.css';
import '../../css/j/jg8vcabzy.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="z4jxu5czf"/><path clip-rule="evenodd" class="fzx-cqyqn"/><path clip-rule="evenodd" class="lbs6myb9c"/><path clip-rule="evenodd" class="pl2gq7b0p"/><path class="jg8vcabzy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:transfer-truck-time-flat"} {...others} />);
}

export default Component;
