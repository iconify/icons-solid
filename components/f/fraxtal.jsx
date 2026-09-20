import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/smr47_3mh.css';
import '../../css/p/ph-spx85e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="smr47_3mh"/><path class="ph-spx85e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:fraxtal"} {...others} />);
}

export default Component;
