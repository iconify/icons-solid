import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s0_jigb-j.css';
import '../../css/x/xjr5jrboz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s0_jigb-j"/><path class="xjr5jrboz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:radio"} {...others} />);
}

export default Component;
