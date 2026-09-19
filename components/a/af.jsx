import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ujdr_z-tg.css';
import '../../css/i/ie8xb9bph.css';
import '../../css/k/kjhiwzr5a.css';
import '../../css/b/b15lz3t9t.css';
import '../../css/l/leo2g9bzz.css';
import '../../css/p/p2t_ggbms.css';
import '../../css/f/fwp2t3bhz.css';
import '../../css/x/xf46op4kz.css';

const viewBox = {"width":32,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ujdr_z-tg"/><path clip-rule="evenodd" class="ie8xb9bph"/><path clip-rule="evenodd" class="kjhiwzr5a"/><path clip-rule="evenodd" class="b15lz3t9t"/><path clip-rule="evenodd" class="leo2g9bzz"/><path class="p2t_ggbms"/><path clip-rule="evenodd" class="fwp2t3bhz"/><path clip-rule="evenodd" class="xf46op4kz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:af"} {...others} />);
}

export default Component;
