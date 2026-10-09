import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv1fucc3u.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hv1fucc3u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:anvil-20-bold"} {...others} />);
}

export default Component;
