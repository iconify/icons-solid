import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dg_5oxbmd.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="dg_5oxbmd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:chat-right-heart-fill"} {...others} />);
}

export default Component;
