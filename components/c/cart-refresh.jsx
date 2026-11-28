import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lh7f7tbpk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lh7f7tbpk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:cart-refresh"} {...others} />);
}

export default Component;
