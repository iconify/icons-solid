import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cew6qzb9g.css';
import '../../css/f/f1z6ukp4k.css';
import '../../css/x/xepvy03cu.css';
import '../../css/f/fv0b0curj.css';
import '../../css/s/sh-v25pwo.css';
import '../../css/e/em3f67bdu.css';
import '../../css/n/nzpecccbj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="cew6qzb9g"/><path class="f1z6ukp4k"/><path class="xepvy03cu"/><path class="fv0b0curj"/><path class="sh-v25pwo"/><path class="em3f67bdu"/><path class="nzpecccbj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:skate-duo"} {...others} />);
}

export default Component;
