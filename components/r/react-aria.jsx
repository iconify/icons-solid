import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sbivy8bqx.css';

const viewBox = {"width":800,"height":790,"left":200,"top":206};
const content = `<path class="sbivy8bqx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:react-aria"} {...others} />);
}

export default Component;
