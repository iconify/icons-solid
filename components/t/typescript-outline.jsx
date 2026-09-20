import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a5-k6bcwk.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="a5-k6bcwk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:typescript-outline"} {...others} />);
}

export default Component;
