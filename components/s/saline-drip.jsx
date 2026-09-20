import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ydv9klb5a.css';
import '../../css/s/sj9ntu5cy.css';
import '../../css/z/z6rvuwbez.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/v/vdyr6jbwl.css';
import '../../css/q/qwbcv414l.css';
import '../../css/c/czm8rbclz.css';
import '../../css/e/enzu96b3l.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ydv9klb5a"/><path class="sj9ntu5cy"/><path class="z6rvuwbez"/><g class="jn8qy4bru"><path class="vdyr6jbwl"/><path class="qwbcv414l"/><path class="czm8rbclz"/><path class="enzu96b3l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:saline-drip"} {...others} />);
}

export default Component;
