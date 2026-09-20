import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kzhos931o.css';
import '../../css/w/wjcjnmb0r.css';
import '../../css/d/doj9dq_jg.css';
import '../../css/s/susxgukgt.css';
import '../../css/c/cz7q87nyz.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="kzhos931o"/><path class="wjcjnmb0r"/><g class="doj9dq_jg"><path class="susxgukgt"/><path class="cz7q87nyz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:cloud-with-lightning"} {...others} />);
}

export default Component;
