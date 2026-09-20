import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hgl_jgbvu.css';
import '../../css/k/k_3-ad-xi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hgl_jgbvu"/><path clip-rule="evenodd" class="k_3-ad-xi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:cummies"} {...others} />);
}

export default Component;
