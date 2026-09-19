import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vrxtj9omi.css';
import '../../css/z/zx4uj_bud.css';
import '../../css/g/g2t1w5xdc.css';
import '../../css/a/a_9eu2oqk.css';
import '../../css/g/grz2ngbxu.css';
import '../../css/v/v70_nck6d.css';
import '../../css/l/l8pu2sbyf.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vrxtj9omi"/><path class="zx4uj_bud"/><path clip-rule="evenodd" class="g2t1w5xdc"/><path class="a_9eu2oqk"/><path clip-rule="evenodd" class="grz2ngbxu"/><path clip-rule="evenodd" class="v70_nck6d"/><path class="l8pu2sbyf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:folded-hands-light"} {...others} />);
}

export default Component;
