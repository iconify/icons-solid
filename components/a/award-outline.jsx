import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/anhm5qwyk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="anhm5qwyk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:award-outline"} {...others} />);
}

export default Component;
