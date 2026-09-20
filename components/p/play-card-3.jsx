import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vpq_6637l.css';
import '../../css/d/d4emz5b9o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vpq_6637l"/><path class="d4emz5b9o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:play-card-3"} {...others} />);
}

export default Component;
