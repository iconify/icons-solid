import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zaid2tb2s.css';
import '../../css/b/bgzu24bmj.css';
import '../../css/r/rddc4bbxa.css';
import '../../css/f/fmwyjubnm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zaid2tb2s"/><path class="bgzu24bmj"/><path class="rddc4bbxa"/><path class="fmwyjubnm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:discount"} {...others} />);
}

export default Component;
