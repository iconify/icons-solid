import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/o/or4c5qipf.css';
import '../../css/h/h9bbefbop.css';
import '../../css/a/aijdk7d9i.css';
import '../../css/i/iop-ldbqv.css';
import '../../css/b/bvn9dabbf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="or4c5qipf"/><path class="h9bbefbop"/><path class="aijdk7d9i"/><path class="iop-ldbqv"/><path class="bvn9dabbf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:escalators"} {...others} />);
}

export default Component;
