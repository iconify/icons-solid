import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zsgd_fb3n.css';

const viewBox = {"width":684,"height":1568};
const content = `<path class="zsgd_fb3n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:ralph-lauren-dark"} {...others} />);
}

export default Component;
