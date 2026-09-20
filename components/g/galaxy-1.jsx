import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p2fiixb1l.css';
import '../../css/b/be1091uiv.css';
import '../../css/u/uwfihhbqp.css';
import '../../css/k/k2vxk9xgp.css';
import '../../css/w/wd1wdbcag.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="p2fiixb1l"/><path class="be1091uiv"/><path class="uwfihhbqp"/><path class="k2vxk9xgp"/><path class="wd1wdbcag"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:galaxy-1"} {...others} />);
}

export default Component;
