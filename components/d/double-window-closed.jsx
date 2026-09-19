import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c8zy_rbib.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c8zy_rbib"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:double-window-closed"} {...others} />);
}

export default Component;
