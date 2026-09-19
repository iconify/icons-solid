import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g2xtuvbzp.css';
import '../../css/c/c_kgwebkh.css';
import '../../css/q/qw6p53xql.css';
import '../../css/y/y_1r5tbgf.css';
import '../../css/o/o4u3vu48i.css';
import '../../css/l/luapsooot.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><rect class="g2xtuvbzp"/><circle class="c_kgwebkh"/><circle class="qw6p53xql"/><rect class="y_1r5tbgf"/><path class="o4u3vu48i"/><path class="luapsooot"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:subway"} {...others} />);
}

export default Component;
