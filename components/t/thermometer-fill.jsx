import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mirf0bblj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mirf0bblj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:thermometer-fill"} {...others} />);
}

export default Component;
