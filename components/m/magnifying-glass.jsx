import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o403b6bhg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o403b6bhg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:magnifying-glass"} {...others} />);
}

export default Component;
