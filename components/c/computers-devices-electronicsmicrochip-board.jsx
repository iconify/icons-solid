import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vjj25p_6s.css';
import '../../css/m/m4c745b-x.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="vjj25p_6s"/><path class="m4c745b-x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:computers-devices-electronicsmicrochip-board"} {...others} />);
}

export default Component;
