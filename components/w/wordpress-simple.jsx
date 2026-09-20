import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fop6pbdfv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fop6pbdfv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:wordpress-simple"} {...others} />);
}

export default Component;
