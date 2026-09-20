import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/a/a7kvwmrgj.css';
import '../../css/b/bmr1n2fhi.css';
import '../../css/d/d1qde5res.css';
import '../../css/a/ai5b7_bas.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="a7kvwmrgj"/><path class="bmr1n2fhi"/><path class="d1qde5res"/><path class="ai5b7_bas"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:video-player-movie"} {...others} />);
}

export default Component;
