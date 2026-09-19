import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g_2io5_mv.css';
import '../../css/c/ckipxtbbn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g_2io5_mv"/><path class="ckipxtbbn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:chevrons-left"} {...others} />);
}

export default Component;
