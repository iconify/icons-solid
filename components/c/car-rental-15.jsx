import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wxyl2pbba.css';
import '../../css/m/m-7so2bbd.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="wxyl2pbba"/><path class="m-7so2bbd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:car-rental-15"} {...others} />);
}

export default Component;
