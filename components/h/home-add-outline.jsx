import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/srcjumbtm.css';
import '../../css/n/nsza0ub4r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="srcjumbtm"/><path clip-rule="evenodd" class="nsza0ub4r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:home-add-outline"} {...others} />);
}

export default Component;
