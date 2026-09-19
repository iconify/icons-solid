import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yyukhkbwi.css';
import '../../css/n/nn68jobvu.css';
import '../../css/s/spqgtvbyi.css';
import '../../css/i/idse3ubex.css';
import '../../css/k/kloemtb_t.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="yyukhkbwi"/><path class="nn68jobvu"/><path class="spqgtvbyi"/><path class="idse3ubex"/><path class="kloemtb_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:gitlab-wordmark"} {...others} />);
}

export default Component;
