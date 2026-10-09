import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zxd6jfy2h.css';
import '../../css/c/chzkkvbwn.css';
import '../../css/k/k2xeydb2v.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zxd6jfy2h"/><path class="chzkkvbwn"/><path class="k2xeydb2v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:toolbox-20"} {...others} />);
}

export default Component;
