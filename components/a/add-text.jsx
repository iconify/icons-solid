import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/e/edu1rvbnu.css';
import '../../css/k/kuv853bdv.css';
import '../../css/s/s2vennbad.css';
import '../../css/i/igij5ib_p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="edu1rvbnu"/><path class="kuv853bdv"/><path class="s2vennbad"/><path class="igij5ib_p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:add-text"} {...others} />);
}

export default Component;
