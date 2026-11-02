import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rx9dn2b-u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rx9dn2b-u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:hemisphere-fill"} {...others} />);
}

export default Component;
