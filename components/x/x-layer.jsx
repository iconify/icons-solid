import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fuma_8b1z.css';
import '../../css/m/m0f02wb3t.css';
import '../../css/x/xq54x2m2o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fuma_8b1z"/><path class="m0f02wb3t"/><path class="xq54x2m2o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:x-layer"} {...others} />);
}

export default Component;
