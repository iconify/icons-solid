import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w5j847bee.css';
import '../../css/p/pr4dqmbxn.css';
import '../../css/n/n_d0zwbem.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="w5j847bee"/><path class="pr4dqmbxn"/><path class="n_d0zwbem"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:server-alert-20"} {...others} />);
}

export default Component;
