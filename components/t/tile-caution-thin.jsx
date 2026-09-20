import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nhm5ifbce.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="nhm5ifbce"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:tile-caution-thin"} {...others} />);
}

export default Component;
