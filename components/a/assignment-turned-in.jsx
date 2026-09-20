import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x4w25gb8w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x4w25gb8w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:assignment-turned-in"} {...others} />);
}

export default Component;
