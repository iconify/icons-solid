import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zl1rlvb2x.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="zl1rlvb2x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:bookmark-check-fill"} {...others} />);
}

export default Component;
