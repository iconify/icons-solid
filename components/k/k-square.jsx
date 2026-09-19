import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2f2hvbfv.css';

const viewBox = {"width":1792,"height":1792};
const content = `<path class="k2f2hvbfv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:k-square"} {...others} />);
}

export default Component;
