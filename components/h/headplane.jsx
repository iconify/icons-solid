import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y6ankxbmd.css';
import '../../css/w/w951xmbwv.css';
import '../../css/e/ez4l1crno.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="y6ankxbmd"/><path class="w951xmbwv"/><path class="ez4l1crno"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:headplane"} {...others} />);
}

export default Component;
