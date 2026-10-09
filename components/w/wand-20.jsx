import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qovs41bxq.css';
import '../../css/b/bmffqxcpw.css';
import '../../css/p/p-xw0w-5p.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qovs41bxq"/><path class="bmffqxcpw"/><path class="p-xw0w-5p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wand-20"} {...others} />);
}

export default Component;
