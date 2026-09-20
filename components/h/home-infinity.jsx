import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dslf_3bkh.css';
import '../../css/a/atwi-wbrg.css';
import '../../css/a/a3j2yk42b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dslf_3bkh"/><path class="atwi-wbrg"/><path class="a3j2yk42b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:home-infinity"} {...others} />);
}

export default Component;
