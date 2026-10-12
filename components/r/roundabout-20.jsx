import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vqzqvbb7y.css';
import '../../css/a/a3evc_bbq.css';
import '../../css/u/unwdjw5xz.css';
import '../../css/x/x6wh33b7i.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vqzqvbb7y"/><path class="a3evc_bbq"/><path class="unwdjw5xz"/><path class="x6wh33b7i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:roundabout-20"} {...others} />);
}

export default Component;
