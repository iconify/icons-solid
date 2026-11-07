import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jwqzobcjb.css';
import '../../css/i/ildxxvqdd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jwqzobcjb"/><path class="ildxxvqdd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:notebook-minimalistic-bold"} {...others} />);
}

export default Component;
