import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hazukeb0q.css';
import '../../css/w/wmdqqpb4u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hazukeb0q"/><path class="wmdqqpb4u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:cap-straight"} {...others} />);
}

export default Component;
