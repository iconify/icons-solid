import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jzowd3bfo.css';
import '../../css/k/k_mslbcbi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jzowd3bfo"/><path class="k_mslbcbi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:comment-plus"} {...others} />);
}

export default Component;
