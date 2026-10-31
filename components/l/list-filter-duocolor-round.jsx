import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jwvpjsz2r.css';
import '../../css/k/k4qo1xe9v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jwvpjsz2r"/><path class="k4qo1xe9v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:list-filter-duocolor-round"} {...others} />);
}

export default Component;
