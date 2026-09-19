import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p9vd2w9_c.css';

const viewBox = {"width":1408,"height":1792};
const content = `<path class="p9vd2w9_c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:building"} {...others} />);
}

export default Component;
