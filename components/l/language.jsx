import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mypu-ib1x.css';

const viewBox = {"width":1792,"height":1792};
const content = `<path class="mypu-ib1x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:language"} {...others} />);
}

export default Component;
