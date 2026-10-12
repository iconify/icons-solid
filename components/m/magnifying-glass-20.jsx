import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nwv90_00a.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nwv90_00a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:magnifying-glass-20"} {...others} />);
}

export default Component;
