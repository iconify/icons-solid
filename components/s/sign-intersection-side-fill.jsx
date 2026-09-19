import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e_vt4xbfx.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="e_vt4xbfx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:sign-intersection-side-fill"} {...others} />);
}

export default Component;
