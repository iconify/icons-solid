import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dpgql3bkx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dpgql3bkx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:location-pin-money-atm-1-remix"} {...others} />);
}

export default Component;
