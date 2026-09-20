import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zjc_0wgix.css';
import '../../css/b/bnqvmbbbi.css';
import '../../css/j/jmw4l2mmm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="zjc_0wgix"><path class="bnqvmbbbi"/><path class="jmw4l2mmm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:light-dark-mode"} {...others} />);
}

export default Component;
