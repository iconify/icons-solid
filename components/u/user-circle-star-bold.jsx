import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u35k7d0yo.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="u35k7d0yo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:user-circle-star-bold"} {...others} />);
}

export default Component;
