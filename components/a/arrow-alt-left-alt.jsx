import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bm1j5hbcz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bm1j5hbcz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:arrow-alt-left-alt"} {...others} />);
}

export default Component;
