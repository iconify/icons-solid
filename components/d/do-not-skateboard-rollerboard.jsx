import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gq13s4qpl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gq13s4qpl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:do-not-skateboard-rollerboard"} {...others} />);
}

export default Component;
