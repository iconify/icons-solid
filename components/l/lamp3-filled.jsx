import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h52p0wbbr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h52p0wbbr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:lamp3-filled"} {...others} />);
}

export default Component;
