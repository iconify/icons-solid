import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rjx9z_bng.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rjx9z_bng"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:fridge-alert-outline"} {...others} />);
}

export default Component;
