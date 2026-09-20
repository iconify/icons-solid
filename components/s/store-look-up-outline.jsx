import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ke5xwm82e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ke5xwm82e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:store-look-up-outline"} {...others} />);
}

export default Component;
