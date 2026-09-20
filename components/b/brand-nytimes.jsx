import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ewtlzpb8l.css';
import '../../css/w/wkp2o9z2t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ewtlzpb8l"/><path class="wkp2o9z2t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-nytimes"} {...others} />);
}

export default Component;
