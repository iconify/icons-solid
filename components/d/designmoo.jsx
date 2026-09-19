import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/shye-ib9d.css';

const viewBox = {"width":464,"height":456};
const content = `<path class="shye-ib9d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:designmoo"} {...others} />);
}

export default Component;
