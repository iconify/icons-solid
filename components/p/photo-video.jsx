import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kfh5_8bnz.css';
import '../../css/k/kekpz8b2z.css';
import '../../css/b/bxseec__t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="kfh5_8bnz"/><path class="kekpz8b2z"/><path class="bxseec__t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:photo-video"} {...others} />);
}

export default Component;
