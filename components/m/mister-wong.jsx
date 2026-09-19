import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k05qhhbgf.css';

const viewBox = {"width":408,"height":488};
const content = `<path class="k05qhhbgf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:mister-wong"} {...others} />);
}

export default Component;
