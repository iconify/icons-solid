import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f1dy8tbco.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="f1dy8tbco"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:ethereum-outline"} {...others} />);
}

export default Component;
