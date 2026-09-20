import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bty-djbpj.css';
import '../../css/h/ho4v1pbfp.css';
import '../../css/x/xz_zq702w.css';
import '../../css/m/m3iui26pq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bty-djbpj"/><path class="ho4v1pbfp"/><path class="xz_zq702w"/><path class="m3iui26pq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-github-copilot"} {...others} />);
}

export default Component;
