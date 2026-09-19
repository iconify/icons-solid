import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lm0vp1ieb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lm0vp1ieb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:aws"} {...others} />);
}

export default Component;
