import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lu6n-abkm.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="lu6n-abkm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:brightness-low-fill"} {...others} />);
}

export default Component;
