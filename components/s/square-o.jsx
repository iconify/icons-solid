import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gt0e9ox5f.css';

const viewBox = {"width":1408,"height":1408};
const content = `<path class="gt0e9ox5f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:square-o"} {...others} />);
}

export default Component;
