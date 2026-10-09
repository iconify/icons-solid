import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y7575cbkw.css';
import '../../css/p/p769e2bzk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="y7575cbkw"/><path class="p769e2bzk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:drought-20"} {...others} />);
}

export default Component;
