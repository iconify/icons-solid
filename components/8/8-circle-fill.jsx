import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwstf9b5z.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="wwstf9b5z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:8-circle-fill"} {...others} />);
}

export default Component;
