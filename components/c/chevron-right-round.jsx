import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ticwrhbbc.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ticwrhbbc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icons8:chevron-right-round"} {...others} />);
}

export default Component;
