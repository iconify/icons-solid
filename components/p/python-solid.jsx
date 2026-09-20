import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x_c3lsbki.css';
import '../../css/g/gs5s95byq.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="x_c3lsbki"/><path class="gs5s95byq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:python-solid"} {...others} />);
}

export default Component;
