import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lh6ky0bnp.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="lh6ky0bnp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:stackoverflow-outline"} {...others} />);
}

export default Component;
