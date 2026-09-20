import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xgaa-1bvs.css';
import '../../css/s/sl910ib-z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xgaa-1bvs"/><path class="sl910ib-z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:mood-angry"} {...others} />);
}

export default Component;
