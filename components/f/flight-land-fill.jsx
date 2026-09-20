import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lc4k0s5gf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lc4k0s5gf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:flight-land-fill"} {...others} />);
}

export default Component;
