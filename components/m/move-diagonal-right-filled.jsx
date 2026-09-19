import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ls_du9bsq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ls_du9bsq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:move-diagonal-right-filled"} {...others} />);
}

export default Component;
