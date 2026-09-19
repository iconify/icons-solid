import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d-5pfkb2b.css';

const viewBox = {"width":1200,"height":1200};
const content = `<path class="d-5pfkb2b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"el:circle-arrow-up"} {...others} />);
}

export default Component;
