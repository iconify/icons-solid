import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0106fblp.css';
import '../../css/v/vccof2b9q.css';
import '../../css/b/b8grcvrjy.css';
import '../../css/m/mtpfwtbxh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="a0106fblp"/><path class="vccof2b9q"/><path class="b8grcvrjy"/><path class="mtpfwtbxh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:barn-20-bold"} {...others} />);
}

export default Component;
