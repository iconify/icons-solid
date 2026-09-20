import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kshtvpbko.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="kshtvpbko"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:vermont-with-capital-star"} {...others} />);
}

export default Component;
