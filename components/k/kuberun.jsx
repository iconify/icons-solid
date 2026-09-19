import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/elpv1bbgn.css';
import '../../css/f/f-47owsht.css';
import '../../css/e/ed3l_ac1t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGmR7MedNB)"><path class="elpv1bbgn"/><path clip-rule="evenodd" class="f-47owsht"/></g><defs><clipPath id="SVGmR7MedNB"><path class="ed3l_ac1t"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:kuberun"} {...others} />);
}

export default Component;
