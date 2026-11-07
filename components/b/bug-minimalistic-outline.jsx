import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ui7xt3chp.css';
import '../../css/a/aqhy-8h6r.css';
import '../../css/i/i0rmnxk2w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ui7xt3chp"/><path class="aqhy-8h6r"/><path clip-rule="evenodd" class="i0rmnxk2w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bug-minimalistic-outline"} {...others} />);
}

export default Component;
