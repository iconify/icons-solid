import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/e/e9sl8yd0l.css';
import '../../css/x/xnqyjoq2t.css';
import '../../css/u/u04539kyu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="e9sl8yd0l"/><path class="xnqyjoq2t"/><path class="u04539kyu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:desk-alt"} {...others} />);
}

export default Component;
