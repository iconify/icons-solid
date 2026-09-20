import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ohaewfbtd.css';
import '../../css/v/vx04_ybbn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ohaewfbtd"/><circle class="vx04_ybbn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:toggle-off"} {...others} />);
}

export default Component;
