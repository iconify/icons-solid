import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z-0g-v3zq.css';
import '../../css/l/lnh0e5bqw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="z-0g-v3zq"/><path class="lnh0e5bqw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:siren-20-bold"} {...others} />);
}

export default Component;
