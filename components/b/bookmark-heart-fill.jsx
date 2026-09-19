import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ti-29ubjh.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ti-29ubjh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:bookmark-heart-fill"} {...others} />);
}

export default Component;
