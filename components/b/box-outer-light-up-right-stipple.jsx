import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nlvp0pbyy.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="nlvp0pbyy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:box-outer-light-up-right-stipple"} {...others} />);
}

export default Component;
