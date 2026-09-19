import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ayei4nb0s.css';
import '../../css/w/wx79_4b5c.css';
import '../../css/v/v3ty2ebtb.css';
import '../../css/l/lrw2m_4ec.css';
import '../../css/f/finj1_2du.css';

const viewBox = {"width":49,"height":48};
const content = `<g class="ft5dv1b6b"><rect class="ayei4nb0s"/><path class="wx79_4b5c"/><circle class="v3ty2ebtb"/><circle class="lrw2m_4ec"/><circle class="finj1_2du"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:washing-machine"} {...others} />);
}

export default Component;
