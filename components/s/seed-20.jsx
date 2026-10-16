import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zuoebqbes.css';
import '../../css/u/uuwv95n6f.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zuoebqbes"/><path class="uuwv95n6f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:seed-20"} {...others} />);
}

export default Component;
