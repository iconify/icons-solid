import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qm70g7bus.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qm70g7bus"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:pen-draw-1"} {...others} />);
}

export default Component;
