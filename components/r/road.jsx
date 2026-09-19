import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a5_t2bzyt.css';

const viewBox = {"width":1200,"height":1200};
const content = `<path class="a5_t2bzyt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"el:road"} {...others} />);
}

export default Component;
