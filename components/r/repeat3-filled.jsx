import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h_c7-bc2x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h_c7-bc2x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:repeat3-filled"} {...others} />);
}

export default Component;
