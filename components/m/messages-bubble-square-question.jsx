import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/df6ejwx-m.css';
import '../../css/k/kriaoacuy.css';
import '../../css/e/ehvievdim.css';
import '../../css/c/cexbz7-9l.css';
import '../../css/d/d_ejrd_3c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="df6ejwx-m"/><path class="kriaoacuy"/><path class="ehvievdim"/><path class="cexbz7-9l"/><path class="d_ejrd_3c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:messages-bubble-square-question"} {...others} />);
}

export default Component;
