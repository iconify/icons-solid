import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ck8bl2blq.css';
import '../../css/o/oiuivp-xw.css';
import '../../css/b/brgi00b6i.css';
import '../../css/p/p3d0wwbfy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ck8bl2blq"/><path class="oiuivp-xw"/><path class="brgi00b6i"/><path class="p3d0wwbfy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:und"} {...others} />);
}

export default Component;
