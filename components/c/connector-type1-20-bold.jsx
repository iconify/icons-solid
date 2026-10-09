import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qm8uiwbzj.css';
import '../../css/w/w2ncw7b4j.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qm8uiwbzj"/><path class="w2ncw7b4j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:connector-type1-20-bold"} {...others} />);
}

export default Component;
