import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k8pw52b7m.css';
import '../../css/d/d6bfyvbzu.css';
import '../../css/z/zi6zftbsn.css';
import '../../css/e/epx7xlgmm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="k8pw52b7m"/><path class="d6bfyvbzu"/><path class="zi6zftbsn"/><path class="epx7xlgmm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:film-sparkle"} {...others} />);
}

export default Component;
