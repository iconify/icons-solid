import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9_h9ldng.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="s9_h9ldng"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dashicons:arrow-up-alt"} {...others} />);
}

export default Component;
