import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bnrk32e2w.css';
import '../../css/u/u6kjrrbff.css';
import '../../css/b/bxv5zqbfw.css';
import '../../css/p/pgkotf3_e.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><g transform="translate(2 2)"><circle class="bnrk32e2w"/><ellipse class="u6kjrrbff"/><path class="bxv5zqbfw"/></g><path class="pgkotf3_e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:ambulance"} {...others} />);
}

export default Component;
