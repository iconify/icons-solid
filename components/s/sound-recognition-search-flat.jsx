import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b1mdzjbyo.css';
import '../../css/k/kixve4biq.css';
import '../../css/i/iuweb9bcj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="b1mdzjbyo"/><path clip-rule="evenodd" class="kixve4biq"/><path clip-rule="evenodd" class="iuweb9bcj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:sound-recognition-search-flat"} {...others} />);
}

export default Component;
