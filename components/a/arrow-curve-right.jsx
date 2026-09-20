import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cf_gifb2d.css';
import '../../css/q/qdbu8bkji.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cf_gifb2d"/><path class="qdbu8bkji"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:arrow-curve-right"} {...others} />);
}

export default Component;
