import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a6mztjbys.css';
import '../../css/m/md286fbip.css';
import '../../css/c/cf_8rq2yw.css';
import '../../css/m/mkaydnbje.css';
import '../../css/p/pj_b07fqq.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><circle class="a6mztjbys"/><g class="md286fbip"><path class="cf_8rq2yw"/><path class="mkaydnbje"/><path class="pj_b07fqq"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:fjc"} {...others} />);
}

export default Component;
