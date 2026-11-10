import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h-i8f4bhs.css';
import '../../css/v/vecdb67xh.css';
import '../../css/f/fetz4rglw.css';
import '../../css/i/ihhlg4bgm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="h-i8f4bhs"/><path class="vecdb67xh"/><path class="fetz4rglw"/><path class="ihhlg4bgm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:field-sparkle"} {...others} />);
}

export default Component;
