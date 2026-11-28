import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sceb6cc9l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sceb6cc9l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:cube-minus"} {...others} />);
}

export default Component;
