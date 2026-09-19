import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x1vsmrbga.css';

const viewBox = {"width":14,"height":4};
const content = `<path class="x1vsmrbga"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:range"} {...others} />);
}

export default Component;
