import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xwd_jac5j.css';

const viewBox = {"width":25,"height":24};
const content = `<path clip-rule="evenodd" class="xwd_jac5j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:bricks"} {...others} />);
}

export default Component;
