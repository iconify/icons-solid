import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/f/fqr1d2opr.css';
import '../../css/o/ojvjrrbut.css';
import '../../css/r/rxnvm7beh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="fqr1d2opr"/><path class="ojvjrrbut"/><path class="rxnvm7beh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:office-building-2"} {...others} />);
}

export default Component;
