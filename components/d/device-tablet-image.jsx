import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oo-27jq7t.css';
import '../../css/k/klr9yvd7t.css';
import '../../css/p/pih7z8cbt.css';
import '../../css/o/oqq716k8c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="rotate(-90 3.77 22.3)" class="oo-27jq7t"/><path clip-rule="evenodd" class="klr9yvd7t"/><path class="pih7z8cbt"/><path class="oqq716k8c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:device-tablet-image"} {...others} />);
}

export default Component;
