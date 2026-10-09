import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jk8kloxbh.css';
import '../../css/w/whglv-b6c.css';
import '../../css/t/tn9fdubiu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jk8kloxbh"/><path class="whglv-b6c"/><path class="tn9fdubiu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:folder-plus-20"} {...others} />);
}

export default Component;
