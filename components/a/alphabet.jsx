import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ou6jo2k2s.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ou6jo2k2s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:alphabet"} {...others} />);
}

export default Component;
