import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/j/jfud8mbpg.css';
import '../../css/h/huwz9dbjg.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="jfud8mbpg"/><path class="huwz9dbjg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:check-double"} {...others} />);
}

export default Component;
