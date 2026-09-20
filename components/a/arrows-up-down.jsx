import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b-2g-uwgn.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="b-2g-uwgn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:arrows-up-down"} {...others} />);
}

export default Component;
