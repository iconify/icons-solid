import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l46kd7boi.css';
import '../../css/r/rdwksvbtr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l46kd7boi"/><path class="rdwksvbtr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:science-molecule-bold"} {...others} />);
}

export default Component;
