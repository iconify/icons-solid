import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z2mk2abte.css';
import '../../css/k/k0i46jeje.css';
import '../../css/x/x480hcczg.css';
import '../../css/h/hhs2t3bdg.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="z2mk2abte"/><path class="k0i46jeje"/><path clip-rule="evenodd" class="x480hcczg"/><path class="hhs2t3bdg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:right-facing-fist-dark"} {...others} />);
}

export default Component;
