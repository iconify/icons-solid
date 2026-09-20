import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mp9b6lb8h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mp9b6lb8h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:brightness-high"} {...others} />);
}

export default Component;
