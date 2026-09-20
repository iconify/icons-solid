import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fjw6eqb1h.css';

const viewBox = {"width":24,"height":24,"left":-4,"top":-2};
const content = `<path class="fjw6eqb1h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:train"} {...others} />);
}

export default Component;
