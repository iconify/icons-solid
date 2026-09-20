import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/d/dikjrmbii.css';
import '../../css/m/m9brxebgt.css';
import '../../css/i/i6juev69h.css';
import '../../css/j/j1mgz9bmb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="dikjrmbii"/><path class="m9brxebgt"/><path class="i6juev69h"/><path class="j1mgz9bmb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:shopping-bag-hand-bag-price-tag"} {...others} />);
}

export default Component;
