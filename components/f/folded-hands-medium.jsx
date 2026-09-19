import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a615-geju.css';
import '../../css/a/azmjfrber.css';
import '../../css/g/g86vb6b5z.css';
import '../../css/a/am5bxxbjc.css';
import '../../css/x/xl_4c76ni.css';
import '../../css/n/nlk1sguuy.css';
import '../../css/l/l8pu2sbyf.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="a615-geju"/><path class="azmjfrber"/><path clip-rule="evenodd" class="g86vb6b5z"/><path class="am5bxxbjc"/><path clip-rule="evenodd" class="xl_4c76ni"/><path clip-rule="evenodd" class="nlk1sguuy"/><path class="l8pu2sbyf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:folded-hands-medium"} {...others} />);
}

export default Component;
