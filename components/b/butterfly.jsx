import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/j/jgy3pwvey.css';
import '../../css/x/x7f3ysb0w.css';
import '../../css/i/iydzddcqg.css';
import '../../css/d/d8x507jcg.css';
import '../../css/u/u3ukrc6jk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="jgy3pwvey wm-shadow"/><path class="wm-shadow x7f3ysb0w"/><path class="iydzddcqg"/><path class="d8x507jcg"/><path class="u3ukrc6jk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:butterfly"} {...others} />);
}

export default Component;
