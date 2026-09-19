import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/saty3nwhh.css';
import '../../css/n/nhm009g7n.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="saty3nwhh"/><path class="nhm009g7n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:direction-u-turn-filled"} {...others} />);
}

export default Component;
