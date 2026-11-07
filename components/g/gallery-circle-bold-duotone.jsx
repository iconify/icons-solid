import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zzudi5blo.css';
import '../../css/s/snglypb8l.css';
import '../../css/e/e---ckffe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zzudi5blo"/><path class="snglypb8l"/><path clip-rule="evenodd" class="e---ckffe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:gallery-circle-bold-duotone"} {...others} />);
}

export default Component;
