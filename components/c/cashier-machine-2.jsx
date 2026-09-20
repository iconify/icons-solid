import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/s/s4438qbdx.css';
import '../../css/u/u3casp19i.css';
import '../../css/v/vjlivacpi.css';
import '../../css/b/bbx1ccbsz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="s4438qbdx"/><path class="u3casp19i"/><path class="vjlivacpi"/><path class="bbx1ccbsz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:cashier-machine-2"} {...others} />);
}

export default Component;
