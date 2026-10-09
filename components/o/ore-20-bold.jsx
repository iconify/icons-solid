import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jmpt51hmn.css';
import '../../css/z/zfhxusean.css';
import '../../css/y/y-rk38d9f.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jmpt51hmn"/><path class="zfhxusean"/><path class="y-rk38d9f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ore-20-bold"} {...others} />);
}

export default Component;
