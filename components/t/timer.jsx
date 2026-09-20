import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bwjoyu67r.css';
import '../../css/f/fhcsjwttb.css';
import '../../css/x/x-adczucl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="bwjoyu67r"/><circle class="fhcsjwttb"/><path class="x-adczucl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:timer"} {...others} />);
}

export default Component;
