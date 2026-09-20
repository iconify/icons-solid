import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s6iikjgcv.css';
import '../../css/g/g2svsm15l.css';
import '../../css/z/z04drlb1l.css';
import '../../css/r/rmgjt6byk.css';
import '../../css/j/jii6c3x9u.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="s6iikjgcv"/><path class="g2svsm15l"/><g class="z04drlb1l"><path class="rmgjt6byk"/><path class="jii6c3x9u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:smiling-face-with-hearts"} {...others} />);
}

export default Component;
