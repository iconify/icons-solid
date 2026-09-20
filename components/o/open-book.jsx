import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ae849gbxa.css';
import '../../css/s/sehu1gbpl.css';
import '../../css/j/jskuzhbxo.css';
import '../../css/c/cszouibee.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/d/dqtkhyvdc.css';
import '../../css/e/eegfhb1gb.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="ae849gbxa"><path class="sehu1gbpl"/><path class="jskuzhbxo"/><path class="cszouibee"/></g><g class="ij2x_72vy"><path class="dqtkhyvdc"/><path class="eegfhb1gb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:open-book"} {...others} />);
}

export default Component;
