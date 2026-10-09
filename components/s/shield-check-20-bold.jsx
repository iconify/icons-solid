import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p4bzr0bap.css';
import '../../css/z/z_bjwrbux.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="p4bzr0bap"/><path class="z_bjwrbux"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:shield-check-20-bold"} {...others} />);
}

export default Component;
