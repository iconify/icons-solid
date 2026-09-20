import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/m/mvq51vbwo.css';
import '../../css/g/g9s0194oq.css';
import '../../css/v/v_2s9cb9o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="mvq51vbwo"/><path class="g9s0194oq"/></g><path clip-rule="evenodd" class="v_2s9cb9o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:pix-duotone"} {...others} />);
}

export default Component;
