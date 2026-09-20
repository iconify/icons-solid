import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rn5_oubwf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rn5_oubwf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:data-sharing"} {...others} />);
}

export default Component;
