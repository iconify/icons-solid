import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zxk1z3lyq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zxk1z3lyq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:hard-hat"} {...others} />);
}

export default Component;
