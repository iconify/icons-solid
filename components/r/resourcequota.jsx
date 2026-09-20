import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wj4kgr0on.css';
import '../../css/q/q8zv1imgh.css';
import '../../css/d/dd4j49bys.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/b/bbwgdgbqr.css';
import '../../css/i/iac4_lbny.css';

const viewBox = {"width":18.035,"height":17.5};
const content = `<g class="wj4kgr0on"><path class="q8zv1imgh"/><path class="dd4j49bys"/></g><g class="n1mjunbsu"><path class="bbwgdgbqr"/><path class="iac4_lbny"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"k8s:resourcequota"} {...others} />);
}

export default Component;
