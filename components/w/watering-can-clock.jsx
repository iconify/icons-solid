import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wsppwy8tq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wsppwy8tq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:watering-can-clock"} {...others} />);
}

export default Component;
