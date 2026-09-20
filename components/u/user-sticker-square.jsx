import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/r/r8jrw8hsg.css';
import '../../css/s/scicdrbel.css';
import '../../css/c/c9kvrx91k.css';
import '../../css/q/qjlo5db2v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="r8jrw8hsg"/><path clip-rule="evenodd" class="scicdrbel"/><path class="c9kvrx91k"/><path class="qjlo5db2v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:user-sticker-square"} {...others} />);
}

export default Component;
