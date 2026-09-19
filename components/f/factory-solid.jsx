import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bu9mk0bps.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="bu9mk0bps"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:factory-solid"} {...others} />);
}

export default Component;
