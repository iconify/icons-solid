import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jxlfgvwzg.css';
import '../../css/m/m8sb_hy9w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jxlfgvwzg"/><path clip-rule="evenodd" class="m8sb_hy9w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:cdai"} {...others} />);
}

export default Component;
