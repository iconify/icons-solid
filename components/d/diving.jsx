import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/trz6_5eei.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="trz6_5eei"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"map:diving"} {...others} />);
}

export default Component;
