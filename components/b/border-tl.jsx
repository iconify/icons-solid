import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kqq4bzftk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kqq4bzftk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:border-tl"} {...others} />);
}

export default Component;
