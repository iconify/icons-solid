import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t4xnej07m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t4xnej07m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:flower-pollen-outline"} {...others} />);
}

export default Component;
