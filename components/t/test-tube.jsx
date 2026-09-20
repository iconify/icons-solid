import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/f/fo91v3b2u.css';
import '../../css/y/yh_orebxr.css';
import '../../css/b/bczv-dd1h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="fo91v3b2u"/><path clip-rule="evenodd" class="yh_orebxr"/><path class="bczv-dd1h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:test-tube"} {...others} />);
}

export default Component;
