import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y4bh_tw_t.css';
import '../../css/k/ksle7klhk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="y4bh_tw_t"/><path class="ksle7klhk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:adjust"} {...others} />);
}

export default Component;
