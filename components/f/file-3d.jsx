import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hqcq3__zz.css';
import '../../css/a/asx5imnsw.css';
import '../../css/y/yt1dbz_8h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hqcq3__zz"/><path class="asx5imnsw"/><path class="yt1dbz_8h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:file-3d"} {...others} />);
}

export default Component;
