import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/etkz65bcn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="etkz65bcn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:box-marker-outline"} {...others} />);
}

export default Component;
