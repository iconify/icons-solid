import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k47yy6bqq.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="k47yy6bqq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"radix-icons:hobby-knife"} {...others} />);
}

export default Component;
