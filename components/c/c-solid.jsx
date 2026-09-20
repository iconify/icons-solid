import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kk9ls1b5w.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="kk9ls1b5w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:c-solid"} {...others} />);
}

export default Component;
