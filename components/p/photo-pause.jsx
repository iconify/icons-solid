import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w2jhm70ys.css';
import '../../css/z/zs7ebbcgz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="w2jhm70ys"/><path class="zs7ebbcgz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:photo-pause"} {...others} />);
}

export default Component;
