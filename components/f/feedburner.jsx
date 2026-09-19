import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w66bhhk3x.css';

const viewBox = {"width":432,"height":488};
const content = `<path class="w66bhhk3x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:feedburner"} {...others} />);
}

export default Component;
