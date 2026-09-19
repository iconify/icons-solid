import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w8z9m34ix.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="w8z9m34ix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:dash-circle-dotted"} {...others} />);
}

export default Component;
