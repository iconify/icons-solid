import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k8p1fxbgk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k8p1fxbgk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:shapes-alt-2"} {...others} />);
}

export default Component;
