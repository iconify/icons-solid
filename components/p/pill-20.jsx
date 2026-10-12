import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pbryi_wln.css';
import '../../css/a/a897-ob1z.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="pbryi_wln"/><path class="a897-ob1z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pill-20"} {...others} />);
}

export default Component;
