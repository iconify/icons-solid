import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kx5tgy66g.css';
import '../../css/g/gx3qh1bgl.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="kx5tgy66g"/><path class="gx3qh1bgl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:buffer-16"} {...others} />);
}

export default Component;
