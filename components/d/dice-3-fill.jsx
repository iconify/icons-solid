import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r09i3hofv.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="r09i3hofv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:dice-3-fill"} {...others} />);
}

export default Component;
