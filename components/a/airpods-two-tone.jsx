import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ibcz29bif.css';
import '../../css/j/jp0olbbyo.css';
import '../../css/r/rj2y4vkzd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ibcz29bif"/><path class="jp0olbbyo"/><path class="rj2y4vkzd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:airpods-two-tone"} {...others} />);
}

export default Component;
