import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pf92_rw-s.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="pf92_rw-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:bag-minus-outline"} {...others} />);
}

export default Component;
