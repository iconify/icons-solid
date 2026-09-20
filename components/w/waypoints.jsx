import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wp_oa-ofk.css';
import '../../css/s/swsab_86e.css';
import '../../css/n/npzbi206w.css';
import '../../css/v/v9vljob2t.css';
import '../../css/q/q6v1kxb4c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wp_oa-ofk"/><circle class="swsab_86e"/><circle class="npzbi206w"/><circle class="v9vljob2t"/><circle class="q6v1kxb4c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:waypoints"} {...others} />);
}

export default Component;
