import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lnccf7btq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lnccf7btq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:animation-bounce"} {...others} />);
}

export default Component;
