import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/up_ob0yqq.css';

const viewBox = {"width":17,"height":16};
const content = `<path class="up_ob0yqq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:piano"} {...others} />);
}

export default Component;
