import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dto3afbko.css';
import '../../css/o/o_eh4ib9k.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="dto3afbko"/><path class="o_eh4ib9k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:health-blood-drop-type"} {...others} />);
}

export default Component;
