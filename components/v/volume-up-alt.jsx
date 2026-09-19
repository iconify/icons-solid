import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sokxb_p0k.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="sokxb_p0k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:volume-up-alt"} {...others} />);
}

export default Component;
