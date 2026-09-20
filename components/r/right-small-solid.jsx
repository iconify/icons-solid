import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uaugi6cfq.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="uaugi6cfq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:right-small-solid"} {...others} />);
}

export default Component;
