import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oaizi48jf.css';
import '../../css/t/ty867ghkp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oaizi48jf"/><path class="ty867ghkp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:shield-minus-bold-duotone"} {...others} />);
}

export default Component;
