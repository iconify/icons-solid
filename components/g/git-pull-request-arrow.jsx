import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/llyo8-6yr.css';
import '../../css/z/zix66fb7i.css';
import '../../css/e/e56qc54my.css';
import '../../css/w/w7yy57lcg.css';
import '../../css/q/qy6s686ad.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="llyo8-6yr"/><path class="zix66fb7i"/><circle class="e56qc54my"/><path class="w7yy57lcg"/><path class="qy6s686ad"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:git-pull-request-arrow"} {...others} />);
}

export default Component;
