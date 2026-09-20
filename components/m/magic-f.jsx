import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yaz8pwiff.css';

const viewBox = {"width":24,"height":24,"left":-1,"top":-2};
const content = `<path class="yaz8pwiff"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:magic-f"} {...others} />);
}

export default Component;
