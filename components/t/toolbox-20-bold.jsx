import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hvyjh5a_p.css';
import '../../css/g/g95ma61en.css';
import '../../css/s/s4i4qlbxb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hvyjh5a_p"/><path class="g95ma61en"/><path class="s4i4qlbxb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:toolbox-20-bold"} {...others} />);
}

export default Component;
