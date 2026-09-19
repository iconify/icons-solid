import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g6qz9jbkg.css';
import '../../css/x/xvby95bun.css';
import '../../css/v/vuupicbet.css';
import '../../css/z/zkuat3h5g.css';
import '../../css/u/uybduhbte.css';
import '../../css/i/ic31w-b4v.css';
import '../../css/i/iu5fq_brw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><rect class="g6qz9jbkg"/><rect class="xvby95bun"/><circle class="vuupicbet"/><path class="zkuat3h5g"/><path class="uybduhbte"/><path class="ic31w-b4v"/><path class="iu5fq_brw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:oven"} {...others} />);
}

export default Component;
