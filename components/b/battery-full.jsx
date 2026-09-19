import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oiao0hb6d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oiao0hb6d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:battery-full"} {...others} />);
}

export default Component;
