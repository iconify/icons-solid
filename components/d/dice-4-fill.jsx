import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w7fa9ebby.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="w7fa9ebby"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:dice-4-fill"} {...others} />);
}

export default Component;
