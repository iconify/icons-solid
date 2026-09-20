import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/llyo8-6yr.css';
import '../../css/a/a27p0i-fr.css';
import '../../css/j/janpq1b_z.css';
import '../../css/h/h2-2dgnfu.css';
import '../../css/o/oyjg--ejj.css';
import '../../css/n/n4lk63bsz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="llyo8-6yr"/><path class="a27p0i-fr"/><circle class="janpq1b_z"/><path class="h2-2dgnfu"/><circle class="oyjg--ejj"/><path class="n4lk63bsz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:git-graph"} {...others} />);
}

export default Component;
