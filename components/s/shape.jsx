import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wrqf1xbrp.css';
import '../../css/k/kne6ghv2k.css';
import '../../css/n/n1lfo308a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="wrqf1xbrp"/><path class="kne6ghv2k"/><path class="n1lfo308a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:shape"} {...others} />);
}

export default Component;
